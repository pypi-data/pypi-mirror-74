# Jira-Select: Easily export issues from Jira to CSV

## Quickstart

First, you need to configure `jira-csv` to connect to your jira instance:

```
jira-csv configure
```

Then, you'll need to create a yaml file describing your query and save it
somewhere; example:

```yaml
select:
  - key
  - summary
  - timetracking.originalEstimate as "Hours Estimate"
  - customfield_10048 as "My Important Field"
from: issues
where:
  - labels = "frontend"
  - assignee = "me@adamcoddington.net"
  - resolution is null
```

Now you can run your query:

```
jira-csv run /path/to/query.yaml
```

& it'll hand you back a CSV document with the fields you've selected.

See the built-in help (`--help`) for more options.

## Advanced Usage

### Functions

You can define and use functions for both formatting selected data
and filtering rows returned from Jira.

#### Formatting rows

```yaml
select:
  - status
  - summary
  - customfield_10069 as "Story Points"
  - array_len(customfield_10010) as "Sprint Count"
  - sprint_name(array_item(customfield_10010, -1)) as "Sprint Name"
from: issues
```

In the above example, two of the displayed columns are processed with
a function:

- `Sprint Count`: Will render the number of array elements in the field
  containing the list of sprints in which this issue was present.
- `Sprint Name`: Will show the name of the last sprint associated with
  the displayed issue.

#### Omitting rows

```yaml
select:
  - status as "Status"
  - summary as "Summary"
  - customfield_10069 as "Story Points"
from: issues
having:
  - '"Sprint #19" in coalesce(sprint_name(array_item(customfield_10010, -1)), "")'
```

In the above example, the issues returned from Jira will be compared against
each constraint you've entered in the `having` section; in this case, all
returned issues not having the string "Sprint #19" in the name of the last
sprint associated with the displayed issue will not be written to your output.

## Future Goals

- SQlite support: Instead of exporting a CSV, exporting an SQLite database.
- XLSX support: Instead of exporting a CSV, exporing an XLSX document.
