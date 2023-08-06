# Welcome to `cdk-spot-one`

EC2 Spot Block with Single Instance and EIP

# Sample

Create a single EC2 spot instance for 6 hours with EIP attached:

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
from cdk_spot_one import SpotFleet

fleet = SpotFleet(stack, "SpotFleet",
    target_capacity=1,
    instance_interruption_behavior=InstanceInterruptionBehavior.HIBERNATE,
    default_instance_type=ec2.InstanceType("c5.large"),
    eip_allocation_id="eipalloc-0d1bc6d85895a5410",
    vpc_subnet={
        "subnet_type": ec2.SubnetType.PUBLIC
    },
    terminate_instances_with_expiration=True
)

# fleet to expire after 6 hours
fleet.expire_after(Duration.hours(6))
```
