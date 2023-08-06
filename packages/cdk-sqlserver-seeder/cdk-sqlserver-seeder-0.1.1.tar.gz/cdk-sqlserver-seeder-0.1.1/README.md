# aws-cdk-sqlserver-seeder

![build](https://github.com/kolomied/cdk-sqlserver-seeder/workflows/build/badge.svg)
[![dependencies](https://david-dm.org/kolomied/cdk-sqlserver-seeder.svg)](https://david-dm.org//kolomied/cdk-sqlserver-seeder)

A simple CDK seeder for SQL Server RDS databases.

*cdk-sqlserver-seeder* library is a [AWS CDK](https://aws.amazon.com/cdk/) construct that provides a way
to execute custom SQL scripts on RDS SQL Server resource creation/deletion.

The construct relies on [Invoke-SqlCmd](https://docs.microsoft.com/en-us/powershell/module/sqlserver/invoke-sqlcmd) cmdlet
to run the scripts and handle possible errors. Provides a way to handle transient errors during stack provisioning.

## Usage

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import aws_cdk.core as cdk
import aws_cdk.aws_ec2 as ec2
import aws_cdk.aws_rds as rds
from cdk_sqlserver_seeder import SqlServerSeeder

class DatabaseStack(cdk.Stack):
    def __init__(self, scope, id, *, description=None, env=None, stackName=None, tags=None, synthesizer=None, terminationProtection=None):
        super().__init__(scope, id, description=description, env=env, stackName=stackName, tags=tags, synthesizer=synthesizer, terminationProtection=terminationProtection)

        sql_server = rds.DatabaseInstance(self, "Instance",
            engine=rds.DatabaseInstanceEngine.SQL_SERVER_WEB
        )

        seeder = SqlSeederSecret(self, "SqlSeederSecret",
            database=sql_server,
            port=1433,
            vpc=vpc,
            create_script_path="./SQL/v1.0.0.sql", # script to be executed on resource creation
            delete_script_path="./SQL/cleanup.sql"
        )
```

## Acknowledgements

The whole project inspired by [aws-cdk-dynamodb-seeder](https://github.com/elegantdevelopment/aws-cdk-dynamodb-seeder).
I though it would be very helpful to have a similar way to seed initial schema to more traditional SQL Server databases.
