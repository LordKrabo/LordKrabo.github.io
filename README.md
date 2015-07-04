# History Repeats

Google Doc: https://docs.google.com/document/d/1tDLcLSWPdYXsjMtJrFBgG4mcN71Qbhk1N5rbitEITJw/edit#

**Git commands**

git pull
git commit -am "my change"
git push
git pull --rebase origin fun

git fetch origin
git branch --track my_branch orgin/my_branch

## Workflow

1. User inputs keywords
2. Query Trove API using keywords
3. Filter returned results:  
   - Remove unrelated events
   - Remove duplicate events (multiple articles may reference the same event)
4. Import filtered results into Event model
5. Calculate average occurrence of Events
6. Display Events

## Trove API

**Example HTTP query**
http://api.trove.nla.gov.au/result?q=death%20AND%20by%20AND%20lion&zone=newspaper&encoding=json&key=u944in30nism514v
