# python-nbaclient

A Python Wrapper of NBA Stats RESTful APIs

## Installation

`pip install python_nbaclient`

## Example

```python
from python_nbaclient import teams
teams.FranchiseLeaders(1610612738)
{ 'parameters': {'LeagueID': None, 'TeamID': 1610612738},
  'resource': 'playerawards',
  'resultSets': [ { 'headers': [ 'TEAM_ID',
                                 'PTS',
                                 'PTS_PERSON_ID',
                                 'PTS_PLAYER',
                                 'AST',
                                 'AST_PERSON_ID',
                                 'AST_PLAYER',
                                 'REB',
                                 'REB_PERSON_ID',
                                 'REB_PLAYER',
                                 'BLK',
                                 'BLK_PERSON_ID',
                                 'BLK_PLAYER',
                                 'STL',
                                 'STL_PERSON_ID',
                                 'STL_PLAYER'],
                    'name': 'FranchiseLeaders',
                    'rowSet': [ [ 1610612738,
                                  26395,
                                  76970,
                                  'John Havlicek',
                                  6945,
                                  600003,
                                  'Bob Cousy',
                                  21620,
                                  78049,
                                  'Bill Russell',
                                  1703,
                                  305,
                                  'Robert Parish',
                                  1583,
                                  1718,
                                  'Paul Pierce']]}]}
```
