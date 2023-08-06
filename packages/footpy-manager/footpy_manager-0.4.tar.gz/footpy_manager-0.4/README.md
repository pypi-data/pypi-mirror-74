# Footpy Manager

One Paragraph of project description goes here

## Getting Started

This project able developer to get insights from matches of football. In the following lines I will show an example of usage.

```
from footpy_manager import Team, Match, FootpyManager

team1 = Team('Internacional', 'Brazil')
team2 = Team('Gremio', 'Brazil')
team3 = Team('Flamengo', 'Brazil')

match1 = Match(team1, team2, 2, 0, '01-01-2020')
match2 = Match(team3, team2, 1, 2, '01-01-2020')
match3 = Match(team1, team3, 0, 0, '01-01-2020')

matches = [match1, match2, match3]

footpy = FootpyManager()

for match in matches:
    footpy.insert_match(match)

print(footpy.match_with_more_goals())
print("-----------------------------")
print("The mean of goals made by {} is {}".format(team1.name, footpy.mean_goals_made(team1)))
```

### Prerequisites

What things you need to install the software and how to install them

```
pandas 1.05>
```

### Installing

To install the package you must run this command line.

```
pip install footpy-manager
```

## Author

* **Diórgenes Eugênio** - [diorgeneseugenio](https://github.com/diorgeneseugenio)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Udacity to encourage the students to share our projects.
