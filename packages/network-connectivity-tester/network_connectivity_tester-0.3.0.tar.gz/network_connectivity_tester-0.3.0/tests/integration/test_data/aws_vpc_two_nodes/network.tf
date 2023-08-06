variable "region" {
    default = "us-east-1"
}
variable "registration_queue" {
    default = "connectivitytest-1"
}
variable "install_whl" {
  description = "Python wheel file to install directly"
  default     = ""
}
provider "aws" {
    version = "~> 2.41"

    region = var.region
}

module "vpc" {
    source = "terraform-aws-modules/vpc/aws"
    version = "~> 2.0"

    name = "network-test-vpc"
    cidr = "10.0.0.0/16"

    azs = [
        "us-east-1a",
        "us-east-1b"]
    public_subnets = [
        "10.0.101.0/24",
        "10.0.102.0/24"]
    enable_nat_gateway  = true

    tags = {
        Terraform = "true"
        Environment = "dev"
    }
}

# newest version
module "node1" {
    source = "../../../../integrations/terraform/aws/"
    subnet = module.vpc.public_subnets_cidr_blocks[0]
    vpc_id = module.vpc.vpc_id
    region = var.region
    node_id= "node1"
    registration_queue = var.registration_queue
    install_whl = var.install_whl

}

# newest version
module "node2" {
    source = "../../../../integrations/terraform/aws/"
    subnet = module.vpc.public_subnets_cidr_blocks[1]
    vpc_id = module.vpc.vpc_id
    region = var.region
    node_id= "node2"
    registration_queue = var.registration_queue
    install_whl = var.install_whl
}


output "nodes" {
    value = {
        "node1": module.node1.instance.id,
        "node2": module.node2.instance.id,
    }
}
