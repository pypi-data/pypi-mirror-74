#############
Configuration
#############


*******
Options
*******

Options specific to Terraform Modules.

**args (Optional[Union[Dict[str, List[str]], List[str]]])**
  List of CLI arguments/options to pass to Terraform.
  See :ref:`Specifying Terraform CLI Arguments/Options <tf-args>` for more details.

  .. rubric:: Example
  .. code-block:: yaml

    options:
      args:
        - '-parallelism=25'

**terraform_backend_config (Optional[Dict[str, str]])**
  Mapping to configure Terraform backend. See :ref:`Backend <tf-backend>` for more details.

  .. rubric:: Example
  .. code-block:: yaml

    options:
      terraform_backend_config:
        bucket: mybucket
        dynamodb_table: mytable
        region: us-east-1

**terraform_version (Optional[Union[str, Dict[str, str]]])**
  String containing the Terraform version or a mapping of deploy environment to a Terraform version.
  See :ref:`Version Management <tf-version>` for more details.

  .. rubric:: Example
  .. code-block:: yaml

    options:
      terraform_version: 0.11.13


*********
Variables
*********

Variables can be defined per-environment using one or both of the following options.

tfvars
======

Standard Terraform `tfvars
<https://www.terraform.io/docs/configuration/variables.html#variable-definitions-tfvars-files>`__
files can be used, exactly as one normally would with ``terraform apply -var-file``.
Runway will automatically detect them when named like ``ENV-REGION.tfvars`` or ``ENV.tfvars``.

.. rubric:: Example

Contests of a file named **common-us-east-1.tfvars**

.. code-block::

  region = "us-east-1"
  image_id = "ami-abc123"


runway.yml
==========

Variable values can also be specified as parameter values in runway.yml. It
is recommended to use :ref:`Lookups` in the ``parameters`` section to
assist in selecting the appropriate values for the deploy environment and/or
region being deployed to but, this is not a requirement if the value will
remain the same.

.. code-block:: yaml

  ---
  deployments:
    - modules:
        - path: sampleapp-01.tf
          parameters:
            region: ${env AWS_REGION}
            image_id: ${var image_id.${env AWS_REGION}}
            mylist:
              - item1
              - item2
            mymap:
              key1: value1
              key2: value1
    - modules:
        - path: sampleapp-02.tf
      parameters:
        region: ${env AWS_REGION}
        image_id: ${var image_id.${env AWS_REGION}}
        mylist:
          - item1
          - item2
        mymap:
          key1: value1
          key2: value1
