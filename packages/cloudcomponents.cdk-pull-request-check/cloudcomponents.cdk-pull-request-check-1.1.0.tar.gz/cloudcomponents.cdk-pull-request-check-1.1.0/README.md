![cloudcomponents Logo](https://raw.githubusercontent.com/cloudcomponents/cdk-constructs/master/logo.png)

# @cloudcomponents/cdk-pull-request-check

[![Build Status](https://travis-ci.org/cloudcomponents/cdk-constructs.svg?branch=master)](https://travis-ci.org/cloudcomponents/cdk-constructs)
[![typescript](https://img.shields.io/badge/jsii-typescript-blueviolet.svg)](https://www.npmjs.com/package/@cloudcomponents/cdk-pull-request-check)
[![python](https://img.shields.io/badge/jsii-python-blueviolet.svg)](https://pypi.org/project/cloudcomponents.cdk-pull-request-check/)

> Cdk component that automatically check pull requests

## Install

TypeScript/JavaScript:

```bash
npm install --save @cloudcomponents/cdk-pull-request-check
```

Python:

```bash
pip install cloudcomponents.cdk-pull-request-check
```

## How to use

```javascript
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { Repository } from '@aws-cdk/aws-codecommit';
import { BuildSpec } from '@aws-cdk/aws-codebuild';
import { PullRequestCheck } from '@cloudcomponents/cdk-pull-request-check';

export class CodePipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const repository = new Repository(this, 'Repository', {
      repositoryName: 'MyRepositoryName',
    });

    // CodePipeline etc.

    new PullRequestCheck(this, 'PullRequestCheck', {
      repository,
      buildSpec: BuildSpec.fromSourceFilename('prcheck.yml'),
    });
  }
}
```

## Approval Template Rules

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
from aws_cdk.core import Construct, Stack, StackProps
from aws_cdk.aws_codecommit import Repository
from aws_cdk.aws_codebuild import BuildSpec
from cloudcomponents.cdk_pull_request_check import PullRequestCheck
from cloudcomponents.cdk_pull_request_approval_rule import ApprovalRuleTemplate, ApprovalRuleTemplateRepositoryAssociation

class CodePipelinePullRequestCheckStack(Stack):
    def __init__(self, scope, id, *, description=None, env=None, stackName=None, tags=None, synthesizer=None, terminationProtection=None):
        super().__init__(scope, id, description=description, env=env, stackName=stackName, tags=tags, synthesizer=synthesizer, terminationProtection=terminationProtection)

        repository = Repository(self, "Repository",
            repository_name="repository"
        )

        { approvalRuleTemplateName } = ApprovalRuleTemplate(self, "ApprovalRuleTemplate",
            approval_rule_template_name="Require 1 approver",
            template=Template(
                approvers=Approvers(
                    number_of_approvals_needed=1
                )
            )
        )

        ApprovalRuleTemplateRepositoryAssociation(self, "ApprovalRuleTemplateRepositoryAssociation",
            approval_rule_template_name=approval_rule_template_name,
            repository=repository
        )

        # Approves the pull request
        PullRequestCheck(self, "PullRequestCheck",
            repository=repository,
            build_spec=BuildSpec.from_source_filename("prcheck.yml")
        )
```

## Custom notifications

The component comments the pull request and sets the approval state by default. Custom notifications can be set up this way

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
from aws_cdk.core import Construct, Stack, StackProps
from aws_cdk.aws_codecommit import Repository
from aws_cdk.aws_codebuild import BuildSpec
from aws_cdk.aws_events_targets import SnsTopic
from aws_cdk.aws_sns import Topic
from aws_cdk.aws_sns_subscriptions import EmailSubscription
from cloudcomponents.cdk_pull_request_check import PullRequestCheck

class CodePipelineStack(Stack):
    def __init__(self, scope, id, *, description=None, env=None, stackName=None, tags=None, synthesizer=None, terminationProtection=None):
        super().__init__(scope, id, description=description, env=env, stackName=stackName, tags=tags, synthesizer=synthesizer, terminationProtection=terminationProtection)

        repository = Repository(self, "Repository",
            repository_name="MyRepositoryName",
            description="Some description."
        )

        # Your CodePipeline...

        pr_check = PullRequestCheck(self, "PullRequestCheck",
            repository=repository,
            build_spec=BuildSpec.from_source_filename("buildspecs/prcheck.yml")
        )

        pr_topic = Topic(self, "PullRequestTopic")

        pr_topic.add_subscription(
            EmailSubscription(process.env.DEVSECOPS_TEAM_EMAIL))

        pr_check.on_check_started("started",
            target=SnsTopic(pr_topic)
        )

        pr_check.on_check_succeeded("succeeded",
            target=SnsTopic(pr_topic)
        )

        pr_check.on_check_failed("failed",
            target=SnsTopic(pr_topic)
        )
```

## Example

See more complete [examples](https://github.com/cloudcomponents/cdk-constructs/tree/master/examples).

## License

[MIT](./LICENSE)
