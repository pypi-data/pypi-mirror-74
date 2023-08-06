# Azure Backlog Generator (AzBacklog)

[![github](https://github.com/Azure/Azure-Backlog-Generator/workflows/build/badge.svg)](https://github.com/Azure/Azure-Backlog-Generator/workflows/build/badge.svg)
[![codecov](https://codecov.io/gh/Azure/Azure-Backlog-Generator/branch/master/graph/badge.svg)](https://codecov.io/gh/Azure/Azure-Backlog-Generator)
[![PyPI version](https://badge.fury.io/py/azbacklog.svg)](https://badge.fury.io/py/azbacklog)


Following repetitive processes and aligning all resources consistently can be a daunting task, and it can be common to overlook a step or make an incorrect assumption. There are many variables to consider in any complex process&mdash;identifying roles, resources, etc. 

When conducting intense processes, it can be helpful to have a list of tasks to direct efforts. The Azure Backlog Generator (AzBacklog) is designed to build backlogs for complex processes based on _proven practices_. The backlogs can be generated in either Azure DevOps or GitHub.

## Currently Supported Backlogs
AzBacklog currently supports creating backlogs for the following processes.

| Backlog      | Command-line Option (see below: `-b`)        |
|--------------|---------------|
| [Cloud Adoption Framework (CAF)](https://github.com/Azure/Azure-Backlog-Generator/blob/master/backlogs.md#cloud-adoption-framework-caf)        | `caf`      |
| [Enterprise-scale Architecture](https://github.com/Azure/Azure-Backlog-Generator/blob/master/backlogs.md#enterprise-scale-architecture)     | `esa`     |
| _(Coming Soon)_ [Team Foundation Server (TFS) to Azure DevOps](https://github.com/Azure/Azure-Backlog-Generator/blob/master/backlogs.md#team-foundation-server-tfs-to-azure-devops)   | `tfs`        |


## Execution
Prior to execution, please take a moment to fully read through the documentation below.

### Installation
First, install the `azbacklog` package:
```bash
pip install azbacklog
```

### Create a Backlog
To create a backlog:
```
./azbacklog -t TOKEN


usage: azbacklog [-h] -t TOKEN [-r {azure,github}] [-p PROJECT] [-o ORG] [-b {caf,tfs}]

Generate a backlog of work items.

required arguments:
  -t TOKEN, --token TOKEN                           GitHub or Azure DevOps token

optional arguments:
  -h, --help                                        show this help message and exit
  -r {azure,github}, --repo {azure,github}          targetted repository type
  -p PROJECT, --project PROJECT                     project (repository) name to create
  -o ORG, --org ORG                                 REQUIRED. if target is Azure DevOps
                                                    OPTIONAL. if a GitHub organization
  -b {caf,esa}, --backlog {caf,esa}                 type of backlog to create

```


## Development
To contribute to the project from your development environment:

```
git clone https://github.com/Azure/Azure-Backlog-Generator generator
cd generator

pip install -e .[dev]
```

The previous commands will clone the repo and not only install the runtime dependencies but also the development dependencies.

### Executing Locally Under Development
Once you've installed the package locally (e.g. `-e .[dev]` in the previous command), executing the package is as simple as (include the necessary parameters outlined above in the [Create a Backlog](#Create-a-Backlog) section):
```bash
./azbacklog
```

### Running Tests
To simply execute unit tests:
```bash
python -m pytest
```

If you would like to view a coverage report of the unit tests:
```bash
# Generate the report using pytest
coverage run -m pytest

# View the report, including missing lines
coverage report -m
```

## Shared Responsibility
Microsoft maintains a position of shared responsibility between itself and the customer. Under this shared responsibility, it is understood that appropriate cloud adoption requires active participation from the architect(s) involved and the customer unit(s). In this process, the customer should be prepared to make available network and identity administrators, application and data architects, and other security principals. By understanding requirements through active feedback, Microsoft and its technical architects can adequately assess customer needs and propose recommendations that are proven in practice and that successfully meet customer objectives.

## Technical Requirements
The scripts in this repository require Python as they rely on native Azure DevOps and GitHub SDKs. To execute these scripts, please [download Python](https://www.python.org/downloads/).

## Technical Guidelines
Below are the technical guidelines that should be followed when contributing to the project.

### Source
The application, including unit tests, are developed in Python in order to maintain compatibility between Azure DevOps and GitHub SDKs. The backlog items are developed in simple JSON format with very little metadata.

### Backlog Items
The backlog items are arranged in a collection of epics, features, stories and tasks with the necessary parent-child relationships. The following table outlines the correlations between the backlog items in Azure DevOps and GitHub.

| Azure DevOps | GitHub Issues |
|--------------|---------------|
| Epic         | Project       |
| Feature      | Milestone     |
| User Story   | Issue         |
| Task         | Checklist in the body of the Issue |

Excluding the specific git action of 'tagging' a commit, _tags_ have differing nomenclature between Azure DevOps and GitHub. In Azure DevOps, tags are associated with work items whereas, in GitHub, the terminology for tags is "labels." That being the case, and based on the previous table, tags will be associated with all work item types in Azure DevOps, but will only be associated with issues in GitHub. 

AzBacklog will create tags, as applicable, in both platforms--Azure DevOps and GitHub.

## Creating Custom Backlogs
Contributors are welcome to create new backlogs that others may find useful for repititive actions. The following sections will explain the process.

### Directory Structure
The directory structure follows a very simplistic heirarchy to fascilitate dependency creation and increase efficiency by minimizing overhead:
```
.
├── src                         (source code)
├── tests                       (unit tests)
└── workitems
    └── backlog_type
        ├── config.json         (specific backlog configuration)
        ├── README.md           (optional. README.md for repo initialization)
        ├── 01_SampleEpic1
        │   ├── metadata.json
        │   └── 01_SampleFeature1
        │       ├── metadata.json
        │       └── 01_SampleStory1
        │           ├── metadata.json
        │           ├── 01_SampleTask1
        │            │   └── metadata.json
        │            └── 02_SampleTask2
        │                └── metadata.json
        └── 02_SampleEpic2
            ├── metadata.json
            ├── 01_SampleFeature1
            │   ├── metadata.json
            │   └── 01_SampleStory1
            │       ├── metadata.json
            │       └── 01_SampleTask1
            │           └── metadata.json
            └── 02_SampleFeature2
                ├── metadata.json
                └── 01_SampleStory1
                    ├── metadata.json
                    ├── 01_SampleTask1
                    │   └── metadata.json
                    └── 02_SampleTask2
                        └── metadata.json

```
The heirarchy above follows the structure of `Epic -> Feature -> User Story -> Task`. Each backlog type must contain a `config.json` that directs the engine's creation process. Each folder will contain a `metadata.json` file that follows the *Work Item Format* below and child items. Task folders will not contain any child work items and should only contain its metadata. Finally, the top folder for each backlog type may contain a `README.md` that will be used upon repository initialization.

### Config.json Format
The format of the backlog's `config.json` file is the following:
```json
{
    "description": "My backlog",
    "tags" : [
        "Strategy",
        "Plan",
        "Ready",
        "Innovation",
        "Migration",
        "First Workload",
        "First Host",
        "Workload Template"
    ],
    "roles": [
        "Infra",
        "AppDev",
        "Data",
        "Security"
    ],
    "tagcolors": [
        "d73a4a",
        "0075ca",
        "cfd3d7",
        "a2eeef",
        "7057ff",
        "008672",
        "e4e669",
        "d876e3",
        "39db61",
        "f2639a",
        "59b5d6",
        "12487a"
    ]
}
```

#### OPTIONS ####
**description**  
_Required._  
A simple, single-line description of the backlog.

**tags**  
_Required._  
Allowed tags that may be used for the work items. Tags can be used to group similar work item types.

**roles**  
_Required._  
Allowed roles that may be used for the work items. Roles can be used to easily identify team individuals who should be assigned to the work item. 

**tagcolors**  
_Optional._  
Hexidecimal colors to be used for each tag and role. Standard colors can be used for easier identification based on business process. 

NOTES: 1) The total number of `tagcolors` must equal the combined sum of the `tags` and `roles`. 2) `tagcolors` are not required when deploying to Azure DevOps, but are required for GitHub deployments.


### Work Item Format
The format of a work item's `metadata.json` file is the following:
```json
{
    "title": "Work Item Title",
    "description": "Some description of the work item",
    "tag": ["Strategy | Plan | Ready"],
    "roles": ["AppDev"]
}
```

#### OPTIONS ####
**title**  
_Required._  
A simple, single-line title of the work item.

**description**  
_Required._  
The content of the work item.

**tags**  
_Required._  
The tag(s) for the specific work item.

**roles**  
_Required._  
The role(s) for the specific work item.

**NOTE: _Tags_ and _Roles_  must be those provided in the respective list of the corresponding process. The available lists are found with the [backlog descriptions](https://github.com/a11smiles/Azure-Backlog-Generator/blob/master/backlogs.md#backlog-descriptions).**

## Contributing
Your experience and feedback are valuable and, therefore, your contributions are welcomed. Please create necessary issues and, optionally, pull requests for your feedback or contributions. Please adhere to the technical guidelines above when contributing to the source code.

Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
