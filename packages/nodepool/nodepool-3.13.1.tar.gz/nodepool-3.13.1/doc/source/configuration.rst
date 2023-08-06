.. _configuration:

.. default-domain:: zuul

Configuration
=============

Nodepool reads its configuration from ``/etc/nodepool/nodepool.yaml``
by default.  The configuration file follows the standard YAML syntax
with a number of sections defined with top level keys.  For example, a
full configuration file may have the ``diskimages``, ``labels``,
and ``providers`` sections::

  diskimages:
    ...
  labels:
    ...
  providers:
    ...

The following sections are available.  All are required unless
otherwise indicated.

.. attr-overview::
   :maxdepth: 1

Options
-------

.. attr:: webapp

   Define the webapp endpoint port and listen address

   .. attr:: port
      :default: 8005
      :type: int

      The port to provide basic status information

   .. attr:: listen_address
      :default: 0.0.0.0

      Listen address for web app

.. attr:: elements-dir
   :example: /path/to/elements/dir
   :type: str

   If an image is configured to use diskimage-builder and glance to locally
   create and upload images, then a collection of diskimage-builder elements
   must be present. The ``elements-dir`` parameter indicates a directory
   that holds one or more elements.

.. attr:: images-dir
   :example: /path/to/images/dir
   :type: str

   When we generate images using diskimage-builder they need to be
   written to somewhere. The ``images-dir`` parameter is the place to
   write them.

   .. note:: The builder daemon creates a UUID to uniquely identify
          itself and to mark image builds in ZooKeeper that it
          owns. This file will be named ``builder_id.txt`` and will
          live in the directory named by the :attr:`images-dir`
          option. If this file does not exist, it will be created on
          builder startup and a UUID will be created automatically.


.. attr:: build-log-dir
   :example: /path/to/log/dir
   :type: str

   The builder will store build logs in this directory.  It will create
   one file for each build, named `<image>-<build-id>.log`; for example,
   `fedora-0000000004.log`.  It defaults to ``/var/log/nodepool/builds``.

.. attr:: build-log-retention
   :default: 7
   :type: int

   At the start of each build, the builder will remove old build logs if
   they exceed this value.  This option specifies how many will be
   kept (usually you will see one more, as deletion happens before
   starting a new build).  By default, the last 7 old build logs are
   kept.  Set this to ``-1`` to disable removal of logs.

.. attr:: zookeeper-servers
   :type: list
   :required:

   Lists the ZooKeeper servers uses for coordinating information between
   nodepool workers.

   .. code-block:: yaml

      zookeeper-servers:
        - host: zk1.example.com
          port: 2181
          chroot: /nodepool

   Each entry is a dictionary with the following keys

   .. attr:: host
      :type: str
      :example: zk1.example.com
      :required:

      A zookeeper host

   .. attr:: port
      :default: 2181
      :type: int

      Port to talk to zookeeper

   .. attr:: chroot
      :type: str
      :example: /nodepool

      The ``chroot`` key, used for interpreting ZooKeeper paths
      relative to the supplied root path, is also optional and has no
      default.

.. attr:: zookeeper-tls
   :type: dict

   To use TLS connections with Zookeeper, provide this dictionary with
   the following keys:

   .. attr:: cert
      :type: string
      :required:

      The path to the PEM encoded certificate.

   .. attr:: key
      :type: string
      :required:

      The path to the PEM encoded key.

   .. attr:: ca
      :type: string
      :required:

      The path to the PEM encoded CA certificate.


.. attr:: labels
   :type: list

   Defines the types of nodes that should be created.  Jobs should be
   written to run on nodes of a certain label. Example

   .. code-block:: yaml

      labels:
        - name: my-precise
          max-ready-age: 3600
          min-ready: 2
        - name: multi-precise
          min-ready: 2

   Each entry is a dictionary with the following keys

   .. attr:: name
      :type: string
      :required:

      Unique name used to tie jobs to those instances.

   .. attr:: max-ready-age
      :type: int
      :default: 0

       Maximum number of seconds the node shall be in ready state. If
       this is exceeded the node will be deleted. A value of 0 disables
       this.

   .. attr:: min-ready
      :type: int
      :default: 0

      Minimum number of instances that should be in a ready
      state. Nodepool always creates more nodes as necessary in response
      to demand, but setting ``min-ready`` can speed processing by
      attempting to keep nodes on-hand and ready for immedate use.
      ``min-ready`` is best-effort based on available capacity and is
      not a guaranteed allocation.  The default of 0 means that nodepool
      will only create nodes of this label when there is demand.  Set
      to -1 to have the label considered disabled, so that no nodes will
      be created at all.

.. attr:: max-hold-age
   :type: int
   :default: 0

   Maximum number of seconds a node shall be in "hold" state. If this
   is exceeded the node will be deleted. A value of 0 disables this.

   This setting is applied to all nodes, regardless of label or
   provider.

.. attr:: diskimages
   :type: list

   This section lists the images to be built using
   diskimage-builder. The name of the diskimage is mapped to the
   :attr:`providers.[openstack].diskimages` section of the provider,
   to determine which providers should received uploads of each image.
   The diskimage will be built in every format required by the
   providers with which it is associated.  Because Nodepool needs to
   know which formats to build, if the diskimage will only be built if
   it appears in at least one provider.

   To remove a diskimage from the system entirely, remove all
   associated entries in :attr:`providers.[openstack].diskimages` and
   remove its entry from ``diskimages``.  All uploads will be deleted
   as well as the files on disk.

   A sample configuration section is illustrated below.

   .. code-block:: yaml

      diskimages:
        - name: base
          abstract: True
          elements:
            - vm
            - simple-init
            - openstack-repos
            - nodepool-base
            - cache-devstack
            - cache-bindep
            - growroot
            - infra-package-needs
          env-vars:
            TMPDIR: /opt/dib_tmp
            DIB_CHECKSUM: '1'
            DIB_IMAGE_CACHE: /opt/dib_cache

        - name: ubuntu-bionic
          parent: base
          pause: False
          rebuild-age: 86400
          elements:
            - ubuntu-minimal
          release: bionic
          username: zuul
          env-vars:
            DIB_APT_LOCAL_CACHE: '0'
            DIB_DISABLE_APT_CLEANUP: '1'
            FS_TYPE: ext3

        - name: ubuntu-focal
          base: ubuntu-bionic
          release: focal
          env-vars:
            DIB_DISABLE_APT_CLEANUP: '0'

        - name: centos-8
          parent: base
          pause: True
          rebuild-age: 86400
          formats:
            - raw
            - tar
          elements:
            - centos-minimal
            - epel
          release: '8'
          username: centos
          env-vars:
            FS_TYPE: xfs

   Each entry is a dictionary with the following keys

   .. attr:: name
      :type: string
      :required:

      Identifier to reference the disk image in
      :attr:`providers.[openstack].diskimages` and :attr:`labels`.

   .. attr:: abstract
      :type: bool
      :default: False

      An ``abstract`` entry is used to group common configuration
      together, but will not create any actual image.  A ``diskimage``
      marked as ``abstract`` should be inherited from in another
      ``diskimage`` via its :attr:`diskimages.parent` attribute.

      An `abstract` entry can have a :attr:`diskimages.parent`
      attribute as well; values will merge down.

   .. attr:: parent
      :type: str

      A parent ``diskimage`` entry to inherit from.  Any values from the
      parent will be populated into this image.  Setting any fields in
      the current image will override the parent values execept for
      the following:

      * :attr:`diskimages.env-vars`: new keys are additive, any
        existing keys from the parent will be overwritten by values in
        the current diskimage (i.e. Python `update()` semantics for a
        dictionary).
      * :attr:`diskimages.elements`: values are additive; the list of
        elements from the parent will be extended with any values in
        the current diskimage.  Note that the element list passed to
        `diskimage-builder` is not ordered; elements specify their own
        dependencies and `diskimage-builder` builds a graph from that,
        not the command-line order.

      Note that a parent ``diskimage`` may also have it's own parent,
      creating a chain of inheritance.  See also
      :attr:`diskimages.abstract` for defining common configuration
      that does not create a diskimage.

   .. attr:: formats
      :type: list

      The list of formats to build is normally automatically created
      based on the needs of the providers to which the image is
      uploaded.  To build images even when no providers are configured
      or to build additional formats which you know you may need in the
      future, list those formats here.

   .. attr:: rebuild-age
      :type: int
      :default: 86400

      If the current diskimage is older than this value (in seconds),
      then nodepool will attempt to rebuild it.  Defaults to 86400 (24
      hours).

   .. attr:: release
      :type: string

      Specifies the distro to be used as a base image to build the image using
      diskimage-builder.

   .. attr:: build-timeout
      :type: int

      How long (in seconds) to wait for the diskimage build before giving up.
      The default is 8 hours.

   .. attr:: elements
      :type: list

      Enumerates all the elements that will be included when building the image,
      and will point to the :attr:`elements-dir` path referenced in the same
      config file.

   .. attr:: env-vars
      :type: dict

      Arbitrary environment variables that will be available in the spawned
      diskimage-builder child process.

   .. attr:: pause
      :type: bool
      :default: False

      When set to True, ``nodepool-builder`` will not build the diskimage.

   .. attr:: username
      :type: string
      :default: zuul

      The username that a consumer should use when connecting to the
      node.

   .. attr:: python-path
      :type: string
      :default: auto

      The path of the default python interpreter.  Used by Zuul to set
      ``ansible_python_interpreter``.  The special value ``auto`` will
      direct Zuul to use inbuilt Ansible logic to select the
      interpreter on Ansible >=2.8, and default to
      ``/usr/bin/python2`` for earlier versions.

   .. attr:: dib-cmd
      :type: string
      :default: disk-image-create

      Configure the command called to create this disk image.  By
      default this just ``disk-image-create``; i.e. it will use the
      first match in ``$PATH``.  For example, you may want to override
      this with a fully qualified path to an alternative executable if
      a custom ``diskimage-builder`` is installed in another
      virutalenv.

      .. note:: Any wrapping scripts or similar should consider that
                the command-line or environment arguments to
                ``disk-image-create`` are not considered an API and
                may change.

.. attr:: providers
   :type: list

   Lists the providers Nodepool should use. Each provider is associated to
   a driver listed below.

   Each entry is a dictionary with the following keys

   .. attr:: name
      :type: string
      :required:

      Name of the provider

   .. attr:: max-concurrency
      :type: int
      :default: 0

      Maximum number of node requests that this provider is allowed to
      handle concurrently. The default, if not specified, is to have
      no maximum. Since each node request is handled by a separate
      thread, this can be useful for limiting the number of threads
      used by the nodepool-launcher daemon.

   .. attr:: driver
      :type: string
      :default: openstack

      The driver type.

      .. value:: aws

         For details on the extra options required and provided by the
         AWS driver, see the separate section
         :attr:`providers.[aws]`

      .. value:: gce

         For details on the extra options required and provided by the
         GCE driver, see the separate section
         :attr:`providers.[gce]`

      .. value:: kubernetes

         For details on the extra options required and provided by the
         kubernetes driver, see the separate section
         :attr:`providers.[kubernetes]`

      .. value:: openshift

         For details on the extra options required and provided by the
         openshift driver, see the separate section
         :attr:`providers.[openshift]`

      .. value:: openshiftpods

         For details on the extra options required and provided by the
         openshiftpods driver, see the separate section
         :attr:`providers.[openshiftpods]`

      .. value:: openstack

         For details on the extra options required and provided by the
         OpenStack driver, see the separate section
         :attr:`providers.[openstack]`

      .. value:: static

         For details on the extra options required and provided by the
         static driver, see the separate section
         :attr:`providers.[static]`

      .. value:: azure

         For details on the extra options required and provided by the
         Azure driver, see the separate section
         :attr:`providers.[azure]`


OpenStack Driver
----------------

Selecting the OpenStack driver adds the following options to the
:attr:`providers` section of the configuration.

.. attr-overview::
   :prefix: providers.[openstack]
   :maxdepth: 3

.. attr:: providers.[openstack]

   Specifying the ``openstack`` driver for a provider adds the
   following keys to the :attr:`providers` configuration.

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[openstack]`` to disambiguate from other
             drivers, but ``[openstack]`` is not required in the
             configuration (e.g. below ``providers.[openstack].cloud``
             refers to the ``cloud`` key in the ``providers`` section
             when the ``openstack`` driver is selected).

   An OpenStack provider's resources are partitioned into groups
   called "pools" (see :attr:`providers.[openstack].pools` for details),
   and within a pool, the node types which are to be made available
   are listed (see :attr:`providers.[openstack].pools.labels` for
   details).

   Within each OpenStack provider the available Nodepool image types
   are defined (see :attr:`providers.[openstack].diskimages`).

   .. code-block:: yaml

      providers:
        - name: provider1
          driver: openstack
          cloud: example
          region-name: 'region1'
          rate: 1.0
          boot-timeout: 120
          launch-timeout: 900
          launch-retries: 3
          image-name-format: '{image_name}-{timestamp}'
          hostname-format: '{label.name}-{provider.name}-{node.id}'
          post-upload-hook: /usr/bin/custom-hook
          diskimages:
            - name: trusty
              meta:
                  key: value
                  key2: value
            - name: precise
            - name: devstack-trusty
          pools:
            - name: main
              max-servers: 96
              availability-zones:
                - az1
              networks:
                - some-network-name
              security-groups:
                - zuul-security-group
              labels:
                - name: trusty
                  min-ram: 8192
                  diskimage: trusty
                  console-log: True
                - name: precise
                  min-ram: 8192
                  diskimage: precise
                - name: devstack-trusty
                  min-ram: 8192
                  diskimage: devstack-trusty
        - name: provider2
          driver: openstack
          cloud: example2
          region-name: 'region1'
          rate: 1.0
          image-name-format: '{image_name}-{timestamp}'
          hostname-format: '{label.name}-{provider.name}-{node.id}'
          diskimages:
            - name: precise
              meta:
                  key: value
                  key2: value
          pools:
            - name: main
              max-servers: 96
              labels:
                - name: trusty
                  min-ram: 8192
                  diskimage: trusty
                - name: precise
                  min-ram: 8192
                  diskimage: precise
                - name: devstack-trusty
                  min-ram: 8192
                  diskimage: devstack-trusty

   .. attr:: cloud
      :type: string
      :required:

      Name of a cloud configured in ``clouds.yaml``.

      The instances spawned by nodepool will inherit the default
      security group of the project specified in the cloud definition
      in `clouds.yaml` (if other values not specified). This means
      that when working with Zuul, for example, SSH traffic (TCP/22)
      must be allowed in the project's default security group for Zuul
      to be able to reach instances.

      More information about the contents of `clouds.yaml` can be
      found in `the openstacksdk documentation
      <https://docs.openstack.org/openstacksdk/>`_.

   .. attr:: boot-timeout
      :type: int seconds
      :default: 60

      Once an instance is active, how long to try connecting to the
      image via SSH.  If the timeout is exceeded, the node launch is
      aborted and the instance deleted.

   .. attr:: launch-timeout
      :type: int seconds
      :default: 3600

      The time to wait from issuing the command to create a new instance
      until that instance is reported as "active".  If the timeout is
      exceeded, the node launch is aborted and the instance deleted.

   .. attr:: nodepool-id
      :type: string
      :default: None

      *Deprecated*

      A unique string to identify which nodepool instances is using a
      provider.  This is useful if you want to configure production
      and development instances of nodepool but share the same
      provider.

  .. attr:: launch-retries
     :type: int
     :default: 3

      The number of times to retry launching a server before
      considering the job failed.

  .. attr:: region-name
     :type: string

     The region name if the provider cloud has multiple regions.

  .. attr:: hostname-format
     :type: string
     :default: {label.name}-{provider.name}-{node.id}

     Hostname template to use for the spawned instance.

  .. attr:: image-name-format
     :type: string
     :default: {image_name}-{timestamp}

     Format for image names that are uploaded to providers.

  .. attr:: post-upload-hook
     :type: string
     :default: None

     Filename of an optional script that can be called after an image has
     been uploaded to a provider but before it is taken into use. This is
     useful to perform last minute validation tests before an image is
     really used for build nodes. The script will be called as follows:

     ``<SCRIPT> <PROVIDER> <EXTERNAL_IMAGE_ID> <LOCAL_IMAGE_FILENAME>``

     If the script returns with result code 0 it is treated as successful
     otherwise it is treated as failed and the image gets deleted.

  .. attr:: rate
     :type: int seconds
     :default: 1

     In seconds, amount to wait between operations on the provider.

  .. attr:: clean-floating-ips
     :type: bool
     :default: True

     If it is set to True, nodepool will assume it is the only user of
     the OpenStack project and will attempt to clean unattached
     floating ips that may have leaked around restarts.

  .. attr:: port-cleanup-interval
     :type: int seconds
     :default: 600

     If greater than 0, nodepool will assume it is the only user of the
     OpenStack project and will attempt to clean ports in `DOWN` state after
     the cleanup interval has elapsed. This value can be reduced if the
     instance spawn time on the provider is reliably quicker.

  .. attr:: diskimages
     :type: list

     Each entry in a provider's `diskimages` section must correspond
     to an entry in :attr:`diskimages`.  Such an entry indicates that
     the corresponding diskimage should be uploaded for use in this
     provider.  Additionally, any nodes that are created using the
     uploaded image will have the associated attributes (such as
     flavor or metadata).

     If an image is removed from this section, any previously uploaded
     images will be deleted from the provider.

     .. code-block:: yaml

        diskimages:
          - name: precise
            pause: False
            meta:
                key: value
                key2: value
          - name: windows
            connection-type: winrm
            connection-port: 5986

     Each entry is a dictionary with the following keys

     .. attr:: name
        :type: string
        :required:

        Identifier to refer this image from
        :attr:`providers.[openstack].pools.labels` and
        :attr:`diskimages` sections.

     .. attr:: pause
        :type: bool
        :default: False

        When set to True, nodepool-builder will not upload the image
        to the provider.

     .. attr:: config-drive
        :type: bool
        :default: unset

        Whether config drive should be used for the image. Defaults to
        unset which will use the cloud's default behavior.

     .. attr:: meta
        :type: dict

        Arbitrary key/value metadata to store for this server using
        the Nova metadata service. A maximum of five entries is
        allowed, and both keys and values must be 255 characters or
        less.

     .. attr:: connection-type
        :type: string

        The connection type that a consumer should use when connecting
        to the node. For most diskimages this is not
        necessary. However when creating Windows images this could be
        ``winrm`` to enable access via ansible.

     .. attr:: connection-port
        :type: int
        :default: 22 / 5986

        The port that a consumer should use when connecting to the
        node. For most diskimages this is not necessary. This defaults
        to 22 for ssh and 5986 for winrm.

  .. attr:: cloud-images
     :type: list

     Each entry in this section must refer to an entry in the
     :attr:`labels` section.

     .. code-block:: yaml

        cloud-images:
          - name: trusty-external
            config-drive: False
          - name: windows-external
            connection-type: winrm
            connection-port: 5986

     Each entry is a dictionary with the following keys

     .. attr:: name
        :type: string
        :required:

        Identifier to refer this cloud-image from :attr:`labels`
        section.  Since this name appears elsewhere in the nodepool
        configuration file, you may want to use your own descriptive
        name here and use one of ``image-id`` or ``image-name`` to
        specify the cloud image so that if the image name or id
        changes on the cloud, the impact to your Nodepool
        configuration will be minimal.  However, if neither of those
        attributes are provided, this is also assumed to be the image
        name or ID in the cloud.

     .. attr:: config-drive
        :type: bool
        :default: unset

        Whether config drive should be used for the cloud
        image. Defaults to unset which will use the cloud's default
        behavior.

     .. attr:: image-id
        :type: str

        If this is provided, it is used to select the image from the
        cloud provider by ID, rather than name.  Mutually exclusive
        with :attr:`providers.[openstack].cloud-images.image-name`

     .. attr:: image-name
        :type: str

        If this is provided, it is used to select the image from the
        cloud provider by this name or ID.  Mutually exclusive with
        :attr:`providers.[openstack].cloud-images.image-id`

     .. attr:: username
        :type: str

        The username that a consumer should use when connecting to the
        node.

     .. attr:: python-path
        :type: str
        :default: auto

        The path of the default python interpreter.  Used by Zuul to set
        ``ansible_python_interpreter``.  The special value ``auto`` will
        direct Zuul to use inbuilt Ansible logic to select the
        interpreter on Ansible >=2.8, and default to
        ``/usr/bin/python2`` for earlier versions.

     .. attr:: connection-type
        :type: str

        The connection type that a consumer should use when connecting
        to the node. For most diskimages this is not
        necessary. However when creating Windows images this could be
        'winrm' to enable access via ansible.

     .. attr:: connection-port
        :type: int
        :default: 22/ 5986

        The port that a consumer should use when connecting to the
        node. For most diskimages this is not necessary. This defaults
        to 22 for ssh and 5986 for winrm.

  .. attr:: pools
     :type: list

     A pool defines a group of resources from an OpenStack
     provider. Each pool has a maximum number of nodes which can be
     launched from it, along with a number of cloud-related attributes
     used when launching nodes.

     .. code-block:: yaml

        pools:
          - name: main
            max-servers: 96
            availability-zones:
              - az1
            networks:
              - some-network-name
            security-groups:
              - zuul-security-group
            auto-floating-ip: False
            host-key-checking: True
            node-attributes:
              key1: value1
              key2: value2
            labels:
              - name: trusty
                min-ram: 8192
                diskimage: trusty
                console-log: True
              - name: precise
                min-ram: 8192
                diskimage: precise
              - name: devstack-trusty
                min-ram: 8192
                diskimage: devstack-trusty

     Each entry is a dictionary with the following keys

     .. attr:: name
        :type: string
        :required:

        Pool name

     .. attr:: node-attributes
        :type: dict

        A dictionary of key-value pairs that will be stored with the node data
        in ZooKeeper. The keys and values can be any arbitrary string.

     .. attr:: max-cores
        :type: int

        Maximum number of cores usable from this pool. This can be used
        to limit usage of the tenant. If not defined nodepool can use
        all cores up to the quota of the tenant.

     .. attr:: max-servers
        :type: int

        Maximum number of servers spawnable from this pool. This can
        be used to limit the number of servers. If not defined
        nodepool can create as many servers the tenant allows.

     .. attr:: max-ram
        :type: int

        Maximum ram usable from this pool. This can be used to limit
        the amount of ram allocated by nodepool. If not defined
        nodepool can use as much ram as the tenant allows.

     .. attr:: ignore-provider-quota
        :type: bool
        :default: False

        Ignore the provider quota for this pool. Instead, only check
        against the configured max values for this pool and the
        current usage based on stored data. This may be useful in
        circumstances where the provider is incorrectly calculating
        quota.

     .. attr:: availability-zones
        :type: list

        A list of availability zones to use.

        If this setting is omitted, nodepool will fetch the list of
        all availability zones from nova.  To restrict nodepool to a
        subset of availability zones, supply a list of availability
        zone names in this setting.

        Nodepool chooses an availability zone from the list at random
        when creating nodes but ensures that all nodes for a given
        request are placed in the same availability zone.

     .. attr:: networks
        :type: list

        Specify custom Neutron networks that get attached to each
        node. Specify the name or id of the network as a string.

     .. attr:: security-groups
        :type: list

        Specify custom Neutron security groups that get attached to
        each node. Specify the name or id of the security_group as a
        string.

     .. attr:: auto-floating-ip
        :type: bool
        :default: True

        Specify custom behavior of allocating floating ip for each
        node.  When set to False, ``nodepool-launcher`` will not apply
        floating ip for nodes. When zuul instances and nodes are
        deployed in the same internal private network, set the option
        to False to save floating ip for cloud provider.

     .. attr:: host-key-checking
        :type: bool
        :default: True

        Specify custom behavior of validation of SSH host keys.  When
        set to False, nodepool-launcher will not ssh-keyscan nodes
        after they are booted. This might be needed if
        nodepool-launcher and the nodes it launches are on different
        networks.  The default value is True.

     .. attr:: labels
        :type: list

        Each entry in a pool`s `labels` section indicates that the
        corresponding label is available for use in this pool.  When
        creating nodes for a label, the flavor-related attributes in that
        label's section will be used.

        .. code-block:: yaml

           labels:
             - name: precise
               min-ram: 8192
               flavor-name: 'something to match'
               console-log: True
             - name: trusty
               min-ram: 8192
               networks:
                 - public
                 - private

        Each entry is a dictionary with the following keys

        .. attr:: name
           :type: str
           :required:

           Identifier to refer this image; from :attr:`labels` and
           :attr:`diskimages` sections.

        .. attr:: diskimage
           :type: str
           :required:

           Refers to provider's diskimages, see
           :attr:`providers.[openstack].diskimages`.  Mutually exclusive
           with :attr:`providers.[openstack].pools.labels.cloud-image`

        .. attr:: cloud-image
           :type: str
           :required:

           Refers to the name of an externally managed image in the
           cloud that already exists on the provider. The value of
           ``cloud-image`` should match the ``name`` of a previously
           configured entry from the ``cloud-images`` section of the
           provider. See :attr:`providers.[openstack].cloud-images`.
           Mutually exclusive with
           :attr:`providers.[openstack].pools.labels.diskimage`

        .. attr:: flavor-name
           :type: str

           Name or id of the flavor to use. If
           :attr:`providers.[openstack].pools.labels.min-ram` is
           omitted, it must be an exact match. If
           :attr:`providers.[openstack].pools.labels.min-ram` is given,
           ``flavor-name`` will be used to find flavor names that meet
           :attr:`providers.[openstack].pools.labels.min-ram` and also
           contain ``flavor-name``.

           One of :attr:`providers.[openstack].pools.labels.min-ram` or
           :attr:`providers.[openstack].pools.labels.flavor-name` must
           be specified.

        .. attr:: min-ram
           :type: int

           Determine the flavor to use (e.g. ``m1.medium``,
           ``m1.large``, etc).  The smallest flavor that meets the
           ``min-ram`` requirements will be chosen.

           One of :attr:`providers.[openstack].pools.labels.min-ram` or
           :attr:`providers.[openstack].pools.labels.flavor-name` must
           be specified.

        .. attr:: boot-from-volume
           :type: bool
           :default: False

            If given, the label for use in this pool will create a
            volume from the image and boot the node from it.

        .. attr:: host-key-checking
           :type: bool
           :default: True

           Specify custom behavior of validation of SSH host keys.  When set to
           False, nodepool-launcher will not ssh-keyscan nodes after they are
           booted. This might be needed if nodepool-launcher and the nodes it
           launches are on different networks.  The default value is True.

           .. note:: This value will override the value for
                     :attr:`providers.[openstack].pools.host-key-checking`.

        .. attr:: networks
           :type: list

           Specify custom Neutron networks that get attached to each
           node. Specify the name or id of the network as a string.

           .. note:: This value will override the value for
                     :attr:`providers.[openstack].pools.networks`.

        .. attr:: key-name
           :type: string

           If given, is the name of a keypair that will be used when
           booting each server.

        .. attr:: console-log
           :type: bool
           :default: False

           On the failure of the ssh ready check, download the server
           console log to aid in debugging the problem.

        .. attr:: volume-size
           :type: int gigabytes
           :default: 50

           When booting an image from volume, how big should the
           created volume be.

        .. attr:: instance-properties
           :type: dict
           :default: None

           A dictionary of key/value properties to set when booting
           each server.  These properties become available via the
           ``meta-data`` on the active server (e.g. within
           ``config-drive:openstack/latest/meta_data.json``)

        .. attr:: userdata
           :type: str
           :default: None

           A string of userdata for a node. Example usage is to install
           cloud-init package on image which will apply the userdata.
           Additional info about options in cloud-config:
           https://cloudinit.readthedocs.io/en/latest/topics/examples.html


Static Driver
-------------

Selecting the static driver adds the following options to the
:attr:`providers` section of the configuration.

.. attr-overview::
   :prefix: providers.[static]
   :maxdepth: 3

.. attr:: providers.[static]
   :type: list

   The static provider driver is used to define static nodes.

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[static]`` to disambiguate from other
             drivers, but ``[static]`` is not required in the
             configuration (e.g. below ``providers.[static].pools``
             refers to the ``pools`` key in the ``providers`` section
             when the ``static`` driver is selected).

   Example:

   .. code-block:: yaml

      providers:
        - name: static-rack
          driver: static
          pools:
            - name: main
              nodes:
                - name: trusty.example.com
                  labels: trusty-static
                  timeout: 13
                  connection-port: 22022
                  host-key: fake-key
                  username: zuul
                  max-parallel-jobs: 1

   .. attr:: pools
      :type: list

      A pool defines a group of statically declared nodes.

      .. note::

         When providing different labels, it is better to have one pool per
         label to avoid requests being queued when one label is at capacity.

      Each entry is a dictionary with entries as follows

      .. attr:: name
         :type: str
         :required:

         Pool name

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

      .. attr:: nodes
         :type: list
         :required:

         Each entry indicates a static node and it's attributes.

         .. attr:: name
            :type: str
            :required:

            The hostname or ip address of the static node. This must be
            unique across all nodes defined within the configuration file.

         .. attr:: labels
            :type: list
            :required:

            The list of labels associated with the node.

         .. attr:: host-key-checking
             :type: bool
             :default: True

             Specify custom behavior of validation of host connection.
             When set to False, nodepool-launcher will not scan the nodes
             before they are registered. This might be needed if
             nodepool-launcher and the static nodes are on isolated
             networks. The default value is True.

         .. attr:: timeout
            :type: int
            :default: 5

            The timeout in second before the ssh ping is considered failed.

         .. attr:: connection-type
            :type: string
            :default: ssh

            The connection type that a consumer should use when connecting
            to the node.

            .. value:: winrm

            .. value:: ssh

         .. attr:: connection-port
            :type: int
            :default: 22 / 5986

            The port that a consumer should use when connecting to the node.
            For most nodes this is not necessary. This defaults to 22 when
            ``connection-type`` is 'ssh' and 5986 when it is 'winrm'.

         .. attr:: host-key
            :type: str

            The ssh host key of the node.

         .. attr:: username
            :type: str
            :default: zuul

            The username nodepool will use to validate it can connect to the
            node.

         .. attr:: python-path
            :type: str
            :default: /usr/bin/python2

            The path of the default python interpreter.  Used by Zuul to set
            ``ansible_python_interpreter``.  The special value ``auto`` will
            direct Zuul to use inbuilt Ansible logic to select the
            interpreter on Ansible >=2.8, and default to
            ``/usr/bin/python2`` for earlier versions.

         .. attr:: max-parallel-jobs
            :type: int
            :default: 1

            The number of jobs that can run in parallel on this node.


Kubernetes Driver
-----------------

Selecting the kubernetes driver adds the following options to the
:attr:`providers` section of the configuration.

.. attr-overview::
   :prefix: providers.[kubernetes]
   :maxdepth: 3

.. attr:: providers.[kubernetes]
   :type: list

   A Kubernetes provider's resources are partitioned into groups
   called `pools` (see :attr:`providers.[kubernetes].pools` for
   details), and within a pool, the node types which are to be made
   available are listed (see :attr:`providers.[kubernetes].pools.labels` for
   details).

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[kubernetes]`` to disambiguate from other
             drivers, but ``[kubernetes]`` is not required in the
             configuration (e.g. below
             ``providers.[kubernetes].pools`` refers to the ``pools``
             key in the ``providers`` section when the ``kubernetes``
             driver is selected).

   Example:

   .. code-block:: yaml

     providers:
       - name: kubespray
         driver: kubernetes
         context: admin-cluster.local
         pools:
           - name: main
             labels:
               - name: kubernetes-namespace
                 type: namespace
               - name: pod-fedora
                 type: pod
                 image: docker.io/fedora:28


   .. attr:: context

      Name of the context configured in ``kube/config``.

      Before using the driver, Nodepool either needs a ``kube/config``
      file installed with a cluster admin context, in which case this
      setting is required, or if Nodepool is running inside
      Kubernetes, this setting and the ``kube/config`` file may be
      omitted and Nodepool will use a service account loaded from the
      in-cluster configuration path.

   .. attr:: launch-retries
      :default: 3

      The number of times to retry launching a node before considering
      the job failed.


   .. attr:: pools
      :type: list

      A pool defines a group of resources from a Kubernetes
      provider.

      .. attr:: name
         :required:

         Namespaces are prefixed with the pool's name.

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

      .. attr:: labels
         :type: list

         Each entry in a pool`s `labels` section indicates that the
         corresponding label is available for use in this pool.

         Each entry is a dictionary with the following keys

         .. attr:: name
            :required:

            Identifier for this label; references an entry in the
            :attr:`labels` section.

         .. attr:: type

            The Kubernetes provider supports two types of labels:

            .. value:: namespace

               Namespace labels provide an empty namespace configured
               with a service account that can create pods, services,
               configmaps, etc.

            .. value:: pod

               Pod labels provide a dedicated namespace with a single pod
               created using the
               :attr:`providers.[kubernetes].pools.labels.image` parameter and it
               is configured with a service account that can exec and get
               the logs of the pod.

         .. attr:: image

            Only used by the
            :value:`providers.[kubernetes].pools.labels.type.pod` label type;
            specifies the image name used by the pod.

         .. attr:: python-path
            :type: str
            :default: auto

           The path of the default python interpreter.  Used by Zuul to set
           ``ansible_python_interpreter``.  The special value ``auto`` will
           direct Zuul to use inbuilt Ansible logic to select the
           interpreter on Ansible >=2.8, and default to
           ``/usr/bin/python2`` for earlier versions.

         .. attr:: cpu
            :type: int

            Only used by the
            :value:`providers.[kubernetes].pools.labels.type.pod` label type;
            specifies the number of cpu to request for the pod.

         .. attr:: memory
            :type: int

            Only used by the
            :value:`providers.[kubernetes].pools.labels.type.pod` label type;
            specifies the amount of memory in MB to request for the pod.



Openshift Driver
----------------

Selecting the openshift driver adds the following options to the
:attr:`providers` section of the configuration.

.. attr-overview::
   :prefix: providers.[openshift]
   :maxdepth: 3

.. attr:: providers.[openshift]
   :type: list

   An Openshift provider's resources are partitioned into groups called `pool`
   (see :attr:`providers.[openshift].pools` for details), and within a pool,
   the node types which are to be made available are listed
   (see :attr:`providers.[openshift].labels` for details).

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[openshift]`` to disambiguate from other
             drivers, but ``[openshift]`` is not required in the
             configuration (e.g. below
             ``providers.[openshift].pools`` refers to the ``pools``
             key in the ``providers`` section when the ``openshift``
             driver is selected).

   Example:

   .. code-block:: yaml

     providers:
       - name: cluster
         driver: openshift
         context: context-name
         pools:
           - name: main
             labels:
               - name: openshift-project
                 type: project
               - name: openshift-pod
                 type: pod
                 image: docker.io/fedora:28

   .. attr:: context
      :required:

      Name of the context configured in ``kube/config``.

      Before using the driver, Nodepool services need a ``kube/config`` file
      manually installed with self-provisioner (the service account needs to
      be able to create projects) context.
      Make sure the context is present in ``oc config get-contexts`` command
      output.

   .. attr:: launch-retries
      :default: 3

      The number of times to retry launching a node before considering
      the job failed.

   .. attr:: max-projects
      :default: infinite
      :type: int

      Maximum number of projects that can be used.

   .. attr:: pools
      :type: list

      A pool defines a group of resources from an Openshift provider.

      .. attr:: name
         :required:

         Project's name are prefixed with the pool's name.

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

   .. attr:: labels
      :type: list

      Each entry in a pool`s `labels` section indicates that the
      corresponding label is available for use in this pool.

      Each entry is a dictionary with the following keys

      .. attr:: name
         :required:

         Identifier for this label; references an entry in the
         :attr:`labels` section.

      .. attr:: type

         The Openshift provider supports two types of labels:

         .. value:: project

            Project labels provide an empty project configured
            with a service account that can create pods, services,
            configmaps, etc.

         .. value:: pod

            Pod labels provide a new dedicated project with a single
            pod created using the
            :attr:`providers.[openshift].labels.image` parameter and it
            is configured with a service account that can exec and get
            the logs of the pod.

      .. attr:: image

         Only used by the
         :value:`providers.[openshift].labels.type.pod` label type;
         specifies the image name used by the pod.

      .. attr:: image-pull
         :default: IfNotPresent
         :type: str

         The ImagePullPolicy, can be IfNotPresent, Always or Never.

      .. attr:: python-path
         :type: str
         :default: auto

          The path of the default python interpreter.  Used by Zuul to set
          ``ansible_python_interpreter``.  The special value ``auto`` will
          direct Zuul to use inbuilt Ansible logic to select the
          interpreter on Ansible >=2.8, and default to
          ``/usr/bin/python2`` for earlier versions.

      .. attr:: cpu
         :type: int

         Only used by the
         :value:`providers.[openshift].labels.type.pod` label type;
         specifies the number of cpu to request for the pod.

      .. attr:: memory
         :type: int

         Only used by the
         :value:`providers.[openshift].labels.type.pod` label type;
         specifies the amount of memory in MB to request for the pod.


Openshift Pods Driver
---------------------

Selecting the openshift pods driver adds the following options to the
:attr:`providers` section of the configuration.

.. attr:: providers.[openshiftpods]
   :type: list

   The Openshift Pods driver is similar to the Openshift driver, but it
   only support pod label to be created in a single project. This enable
   using an unprivileged service account that doesn't requires the
   self-provisioner role.

   Example:

   .. code-block:: yaml

     providers:
       - name: cluster
         driver: openshiftpods
         context: unprivileged-context-name
         pools:
           - name: main
             labels:
               - name: openshift-pod
                 image: docker.io/fedora:28

   .. attr:: context
      :required:

      Name of the context configured in ``kube/config``.

      Before using the driver, Nodepool services need a ``kube/config`` file
      manually installed with self-provisioner (the service account needs to
      be able to create projects) context.
      Make sure the context is present in ``oc config get-contexts`` command
      output.

   .. attr:: launch-retries
      :default: 3

      The number of times to retry launching a pod before considering
      the job failed.

   .. attr:: max-pods
      :default: infinite
      :type: int

      Maximum number of pods that can be used.

   .. attr:: pools
      :type: list

      A pool defines a group of resources from an Openshift provider.

      .. attr:: name
         :required:

         The project's name that will be used to create the pods.

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

   .. attr:: labels
      :type: list

      Each entry in a pool`s `labels` section indicates that the
      corresponding label is available for use in this pool.

      Each entry is a dictionary with the following keys

      .. attr:: name
         :required:

         Identifier for this label; references an entry in the
         :attr:`labels` section.

      .. attr:: image

         The image name.

      .. attr:: image-pull
         :default: IfNotPresent
         :type: str

         The ImagePullPolicy, can be IfNotPresent, Always or Never.

      .. attr:: cpu
         :type: int

         The number of cpu to request for the pod.

      .. attr:: memory
         :type: int

         The amount of memory in MB to request for the pod.

      .. attr:: python-path
         :type: str
         :default: auto

        The path of the default python interpreter.  Used by Zuul to set
        ``ansible_python_interpreter``.  The special value ``auto`` will
        direct Zuul to use inbuilt Ansible logic to select the
        interpreter on Ansible >=2.8, and default to
        ``/usr/bin/python2`` for earlier versions.


AWS EC2 Driver
--------------

Selecting the aws driver adds the following options to the :attr:`providers`
section of the configuration.

.. attr-overview::
   :prefix: providers.[aws]
   :maxdepth: 3

.. attr:: providers.[aws]
   :type: list

   An AWS provider's resources are partitioned into groups called `pool`
   (see :attr:`providers.[aws].pools` for details), and within a pool,
   the node types which are to be made available are listed
   (see :attr:`providers.[aws].pools.labels` for details).

   See `Boto Configuration`_ for information on how to configure credentials
   and other settings for AWS access in Nodepool's runtime environment.

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[aws]`` to disambiguate from other
             drivers, but ``[aws]`` is not required in the
             configuration (e.g. below
             ``providers.[aws].pools`` refers to the ``pools``
             key in the ``providers`` section when the ``aws``
             driver is selected).

   Example:

   .. code-block:: yaml

     providers:
       - name: ec2-us-west-2
         driver: aws
         region-name: us-west-2
         cloud-images:
           - name: debian9
             image-id: ami-09c308526d9534717
             username: admin
         pools:
           - name: main
             max-servers: 5
             subnet-id: subnet-0123456789abcdef0
             security-group-id: sg-01234567890abcdef
             labels:
               - name: debian9
                 cloud-image: debian9
                 instance-type: t3.medium
                 iam-instance-profile:
                   arn: arn:aws:iam::123456789012:instance-profile/s3-read-only
                 key-name: zuul
                 tags:
                   key1: value1
               - name: debian9-large
                 cloud-image: debian9
                 instance-type: t3.large
                 key-name: zuul
                 tags:
                   key1: value1
                   key2: value2

   .. attr:: name
      :required:

      A unique name for this provider configuration.

   .. attr:: region-name
      :required:

      Name of the `AWS region`_ to interact with.

   .. attr:: profile-name

      The AWS credentials profile to load for this provider. If unspecified the
      `boto3` library will select a profile.

      See `Boto Configuration`_ for more information.

   .. attr:: boot-timeout
      :type: int seconds
      :default: 60

      Once an instance is active, how long to try connecting to the
      image via SSH.  If the timeout is exceeded, the node launch is
      aborted and the instance deleted.

   .. attr:: launch-retries
      :default: 3

      The number of times to retry launching a node before considering
      the job failed.

   .. attr:: cloud-images
      :type: list

      Each entry in this section must refer to an entry in the
      :attr:`labels` section.

      .. code-block:: yaml

         cloud-images:
           - name: ubuntu1804
             image-id: ami-082fd9a18128c9e8c
             username: ubuntu
           - name: ubuntu1804-by-filters
             image-filters:
               - name: name
                 values:
                  - named-ami
             username: ubuntu
           - name: my-custom-win2k3
             connection-type: winrm
             username: admin

      Each entry is a dictionary with the following keys

      .. attr:: name
         :type: string
         :required:

         Identifier to refer this cloud-image from :attr:`providers.[aws].pools.labels` section.
         Since this name appears elsewhere in the nodepool configuration file,
         you may want to use your own descriptive name here and use
         ``image-id`` to specify the cloud image so that if
         the image id changes on the cloud, the impact to your Nodepool
         configuration will be minimal. However, if ``image-id`` is not
         provided, this is assumed to be the image id in the cloud.

      .. attr:: image-id
         :type: str

         If this is provided, it is used to select the image from the cloud
         provider by ID.

      .. attr:: image-filters
         :type: list

         If provided, this is used to select an AMI by filters.  If the filters
         provided match more than one image, the most recent will be returned.
         `image-filters` are not valid if `image-id` is also specified.

         Each entry is a dictionary with the following keys

         .. attr:: name
            :type: str
            :required:

            The filter name. See `Boto describe images`_ for a list of valid filters.

         .. attr:: values
            :type: list
            :required:

            A list of str values to filter on

      .. attr:: username
         :type: str

         The username that a consumer should use when connecting to the node.

      .. attr:: python-path
         :type: str
         :default: auto

         The path of the default python interpreter.  Used by Zuul to set
         ``ansible_python_interpreter``.  The special value ``auto`` will
         direct Zuul to use inbuilt Ansible logic to select the
         interpreter on Ansible >=2.8, and default to
         ``/usr/bin/python2`` for earlier versions.

      .. attr:: connection-type
         :type: str

         The connection type that a consumer should use when connecting to the
         node. For most images this is not necessary. However when creating
         Windows images this could be 'winrm' to enable access via ansible.

      .. attr:: connection-port
         :type: int
         :default: 22/ 5986

         The port that a consumer should use when connecting to the node. For
         most diskimages this is not necessary. This defaults to 22 for ssh and
         5986 for winrm.

   .. attr:: pools
      :type: list

      A pool defines a group of resources from an AWS provider. Each pool has a
      maximum number of nodes which can be launched from it, along with a number
      of cloud-related attributes used when launching nodes.

      .. attr:: name
         :required:

         A unique name within the provider for this pool of resources.

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

      .. attr:: subnet-id

         If provided, specifies the subnet to assign to the primary network
         interface of nodes.

      .. attr:: security-group-id

         If provided, specifies the security group ID to assign to the primary
         network interface of nodes.

      .. attr:: public-ip-address
         :type: bool
         :default: True

         Specify if a public ip address shall be attached to nodes.

      .. attr:: host-key-checking
         :type: bool
         :default: True

         Specify custom behavior of validation of SSH host keys.  When set to
         False, nodepool-launcher will not ssh-keyscan nodes after they are
         booted. This might be needed if nodepool-launcher and the nodes it
         launches are on different networks.  The default value is True.

      .. attr:: labels
         :type: list

         Each entry in a pool's `labels` section indicates that the
         corresponding label is available for use in this pool.  When creating
         nodes for a label, the flavor-related attributes in that label's
         section will be used.

         .. code-block:: yaml

            labels:
              - name: bionic
                instance-type: m5a.large

         Each entry is a dictionary with the following keys

           .. attr:: name
              :type: str
              :required:

              Identifier to refer this label.
              Nodepool will use this to set the name of the instance unless
              the name is specified as a tag.

           .. attr:: cloud-image
              :type: str
              :required:

              Refers to the name of an externally managed image in the
              cloud that already exists on the provider. The value of
              ``cloud-image`` should match the ``name`` of a previously
              configured entry from the ``cloud-images`` section of the
              provider. See :attr:`providers.[aws].cloud-images`.

           .. attr:: ebs-optimized
              :type: bool
              :default: False

              Indicates whether EBS optimization
              (additional, dedicated throughput between Amazon EC2 and Amazon EBS,)
              has been enabled for the instance.

           .. attr:: instance-type
              :type: str
              :required:

              Name of the flavor to use.

           .. attr:: iam-instance-profile
              :type: dict

              Used to attach an iam instance profile.
              Useful for giving access to services without needing any secrets.

              .. attr:: name

                 Name of the instance profile.
                 Mutually exclusive with :attr:`providers.[aws].pools.labels.iam-instance-profile.arn`

              .. attr:: arn

                 ARN identifier of the profile.
                 Mutually exclusive with :attr:`providers.[aws].pools.labels.iam-instance-profile.name`

           .. attr:: key-name
              :type: string
              :required:

              The name of a keypair that will be used when
              booting each server.

           .. attr:: volume-type
              :type: string

              If given, the root `EBS volume type`_

           .. attr:: volume-size
              :type: int

              If given, the size of the root EBS volume, in GiB.

           .. attr:: userdata
              :type: str
              :default: None

              A string of userdata for a node. Example usage is to install
              cloud-init package on image which will apply the userdata.
              Additional info about options in cloud-config:
              https://cloudinit.readthedocs.io/en/latest/topics/examples.html

           .. attr:: tags
              :type: dict
              :default: None

              A dictionary of tags to add to the EC2 instances

.. _`EBS volume type`: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html
.. _`AWS region`: https://docs.aws.amazon.com/general/latest/gr/rande.html
.. _`Boto configuration`: https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html
.. _`Boto describe images`: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html#EC2.Client.describe_images

.. _gce_driver:

Google Cloud Compute Engine (GCE) Driver
----------------------------------------

Selecting the gce driver adds the following options to the :attr:`providers`
section of the configuration.

.. attr-overview::
   :prefix: providers.[gce]
   :maxdepth: 3

.. attr:: providers.[gce]
   :type: list

   An GCE provider's resources are partitioned into groups called `pool`
   (see :attr:`providers.[gce].pools` for details), and within a pool,
   the node types which are to be made available are listed
   (see :attr:`providers.[gce].pools.labels` for details).

   See `Application Default Credentials`_ for information on how to
   configure credentials and other settings for GCE access in
   Nodepool's runtime environment.

   .. note:: For documentation purposes the option names are prefixed
             ``providers.[gce]`` to disambiguate from other
             drivers, but ``[gce]`` is not required in the
             configuration (e.g. below
             ``providers.[gce].pools`` refers to the ``pools``
             key in the ``providers`` section when the ``gce``
             driver is selected).

   Example:

   .. code-block:: yaml

      - name: gce-uscentral1
        driver: gce
        project: nodepool-123456
        region: us-central1
        zone: us-central1-a
        cloud-images:
          - name: debian-stretch
            image-project: debian-cloud
            image-family: debian-9
            username: zuul
            key: ssh-rsa ...
        pools:
          - name: main
            max-servers: 8
            labels:
              - name: debian-stretch
                instance-type: f1-micro
                cloud-image: debian-stretch
                volume-type: standard
                volume-size: 10

   .. attr:: name
      :required:

      A unique name for this provider configuration.

   .. attr:: region
      :required:

      Name of the region to use; see `GCE regions and zones`_.

   .. attr:: zone
      :required:

      Name of the zone to use; see `GCE regions and zones`_.

   .. attr:: boot-timeout
      :type: int seconds
      :default: 60

      Once an instance is active, how long to try connecting to the
      image via SSH.  If the timeout is exceeded, the node launch is
      aborted and the instance deleted.

   .. attr:: launch-retries
      :default: 3

      The number of times to retry launching a node before considering
      the job failed.

   .. attr:: cloud-images
      :type: list

      Each entry in this section must refer to an entry in the
      :attr:`labels` section.

      .. code-block:: yaml

         cloud-images:
           - name: debian-stretch
             image-project: debian-cloud
             image-family: debian-9
             username: zuul
             key: ssh-rsa ...

      Each entry is a dictionary with the following keys:

      .. attr:: name
         :type: string
         :required:

         Identifier to refer this cloud-image from
         :attr:`providers.[gce].pools.labels` section.

      .. attr:: image-id
         :type: str

         If this is provided, it is used to select the image from the cloud
         provider by ID.

      .. attr:: image-project
         :type: str

         If :attr:`providers.[gce].cloud-images.image-id` is not
         provided, this is used along with
         :attr:`providers.[gce].cloud-images.image-family` to find an
         image.

      .. attr:: image-family
         :type: str

         If :attr:`providers.[gce].cloud-images.image-id` is not
         provided, this is used along with
         :attr:`providers.[gce].cloud-images.image-project` to find an
         image.

      .. attr:: username
         :type: str

         The username that a consumer should use when connecting to the node.

      .. attr:: key
         :type: str

         An SSH public key to add to the instance (project global keys
         are added automatically).

      .. attr:: python-path
         :type: str
         :default: auto

         The path of the default python interpreter.  Used by Zuul to set
         ``ansible_python_interpreter``.  The special value ``auto`` will
         direct Zuul to use inbuilt Ansible logic to select the
         interpreter on Ansible >=2.8, and default to
         ``/usr/bin/python2`` for earlier versions.

      .. attr:: connection-type
         :type: str

         The connection type that a consumer should use when connecting to the
         node. For most images this is not necessary. However when creating
         Windows images this could be 'winrm' to enable access via ansible.

      .. attr:: connection-port
         :type: int
         :default: 22/ 5986

         The port that a consumer should use when connecting to the node. For
         most diskimages this is not necessary. This defaults to 22 for ssh and
         5986 for winrm.

   .. attr:: pools
      :type: list

      A pool defines a group of resources from an GCE provider. Each pool has a
      maximum number of nodes which can be launched from it, along with a number
      of cloud-related attributes used when launching nodes.

      .. attr:: name
         :required:

         A unique name within the provider for this pool of resources.

      .. attr:: node-attributes
         :type: dict

         A dictionary of key-value pairs that will be stored with the node data
         in ZooKeeper. The keys and values can be any arbitrary string.

      .. attr:: host-key-checking
         :type: bool
         :default: True

         Specify custom behavior of validation of SSH host keys.  When set to
         False, nodepool-launcher will not ssh-keyscan nodes after they are
         booted. This might be needed if nodepool-launcher and the nodes it
         launches are on different networks.  The default value is True.

      .. attr:: use-internal-ip
         :default: False

         Whether to access the instance with the internal or external IP
         address.

      .. attr:: labels
         :type: list

         Each entry in a pool's `labels` section indicates that the
         corresponding label is available for use in this pool.  When creating
         nodes for a label, the flavor-related attributes in that label's
         section will be used.

         .. code-block:: yaml

            labels:
              - name: debian
                instance-type: f1-micro
                cloud-image: debian-stretch

         Each entry is a dictionary with the following keys

           .. attr:: name
              :type: str
              :required:

              Identifier to refer this label.

           .. attr:: cloud-image
              :type: str
              :required:

              Refers to the name of an externally managed image in the
              cloud that already exists on the provider. The value of
              ``cloud-image`` should match the ``name`` of a previously
              configured entry from the ``cloud-images`` section of the
              provider. See :attr:`providers.[gce].cloud-images`.

           .. attr:: instance-type
              :type: str
              :required:

              Name of the flavor to use.  See `GCE machine types`_.

           .. attr:: volume-type
              :type: string

              If given, the root volume type (``pd-standard`` or
              ``pd-ssd``).

           .. attr:: volume-size
              :type: int

              If given, the size of the root volume, in GiB.


.. _`Application Default Credentials`: https://cloud.google.com/docs/authentication/production
.. _`GCE regions and zones`: https://cloud.google.com/compute/docs/regions-zones/
.. _`GCE machine types`: https://cloud.google.com/compute/docs/machine-types

Azure Compute Driver
--------------------

Selecting the azure driver adds the following options to the :attr:`providers`
section of the configuration.

.. attr-overview::
   :prefix: providers.[azure]
   :maxdepth: 3

.. attr:: providers.[azure]
   :type: list

   An Azure provider's resources are partitioned into groups called `pool`,
   and within a pool, the node types which are to be made available are listed


   .. note:: For documentation purposes the option names are prefixed
             ``providers.[azure]`` to disambiguate from other
             drivers, but ``[azure]`` is not required in the
             configuration (e.g. below
             ``providers.[azure].pools`` refers to the ``pools``
             key in the ``providers`` section when the ``azure``
             driver is selected).

   Example:

   .. code-block:: yaml

     providers:
        - name: azure-central-us
          driver: azure
          zuul-public-key: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAA...
          resource-group-location: centralus
          location: centralus
          resource-group: ZuulCIDev
          auth-path: /Users/grhayes/.azure/nodepoolCreds.json
          subnet-id: /subscriptions/<subscription-id>/resourceGroups/ZuulCI/providers/Microsoft.Network/virtualNetworks/NodePool/subnets/default
          cloud-images:
            - name: bionic
              username: zuul
              image-reference:
                sku: 18.04-LTS
                publisher: Canonical
                version: latest
                offer: UbuntuServer
          pools:
            - name: main
              max-servers: 10
              labels:
                - name: bionic
                  cloud-image: bionic
                  hardware-profile:
                    vm-size: Standard_D1_v2
                  tags:
                    department: R&D
                    purpose: CI/CD

   .. attr:: name
      :required:

      A unique name for this provider configuration.

   .. attr:: location
      :required:

      Name of the Azure region to interact with.

   .. attr:: resource-group-location
      :required:

      Name of the Azure region to where the home Resource Group is or should be created.

   .. attr:: auth-path
      :required:

      Path to the JSON file containing the service principal credentials.
      Create with the `Azure CLI`_ and the ``--sdk-auth`` flag

   .. attr:: subnet-id
      :required:

      Subnet to create VMs on

  .. attr:: cloud-images
     :type: list

     Each entry in this section must refer to an entry in the
     :attr:`labels` section.

     .. code-block:: yaml

        cloud-images:
          - name: bionic
            username: zuul
            image-reference:
              sku: 18.04-LTS
              publisher: Canonical
              version: latest
              offer: UbuntuServer
          - name: windows-server-2016
            username: zuul
            image-reference:
               sku: 2016-Datacenter
               publisher: MicrosoftWindowsServer
               version: latest
               offer: WindowsServer


     Each entry is a dictionary with the following keys

     .. attr:: name
        :type: string
        :required:

        Identifier to refer this cloud-image from :attr:`labels`
        section.  Since this name appears elsewhere in the nodepool
        configuration file, you may want to use your own descriptive
        name here.

     .. attr:: username
        :type: str

        The username that a consumer should use when connecting to the
        node.

     .. attr:: image-reference
        :type: dict
        :required:

        .. attr:: sku
           :type: str
           :required:

           Image SKU

        .. attr:: publisher
           :type: str
           :required:

           Image Publisher

        .. attr:: offer
           :type: str
           :required:

           Image offers

        .. attr:: version
           :type: str
           :required:

           Image version


  .. attr:: pools
      :type: list

      A pool defines a group of resources from an Azure provider. Each pool has a
      maximum number of nodes which can be launched from it, along with a number
      of cloud-related attributes used when launching nodes.

      .. attr:: name
         :required:

         A unique name within the provider for this pool of resources.

      .. attr:: labels
         :type: list

         Each entry in a pool's `labels` section indicates that the
         corresponding label is available for use in this pool.  When creating
         nodes for a label, the flavor-related attributes in that label's
         section will be used.

         .. code-block:: yaml

            labels:
              - name: bionic
                cloud-image: bionic
                hardware-profile:
                  vm-size: Standard_D1_v2

         Each entry is a dictionary with the following keys

           .. attr:: name
              :type: str
              :required:

              Identifier to refer this label.

           .. attr:: cloud-image
             :type: str
             :required:

             Refers to the name of an externally managed image in the
             cloud that already exists on the provider. The value of
             ``cloud-image`` should match the ``name`` of a previously
             configured entry from the ``cloud-images`` section of the
             provider.

           .. attr:: hardware-profile
             :required:

             .. attr:: vm-size
                :required:
                :type: str

                VM Size of the VMs to use in Azure. See the VM size list on `azure.microsoft.com`_
                for the list of sizes availabile in each region.


.. _`Azure CLI`: https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest

.. _azure.microsoft.com: https://azure.microsoft.com/en-us/global-infrastructure/services/?products=virtual-machines
