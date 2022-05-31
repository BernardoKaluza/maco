import json
import datetime
consultas =[
  {
    "date": "28-03-2022"
  },
  {
    "date": "28-04-2021"
  },
  {
    "date": "18-12-2018"
  },
  {
    "date": "19-11-2018"
  },
  {
    "date": "16-09-2019"
  },
  {
    "date": "12-09-2021"
  },
  {
    "date": "12-06-2020"
  },
  {
    "date": "17-08-2018"
  },
  {
    "date": "11-06-2021"
  },
  {
    "date": "18-05-2018"
  },
  {
    "date": "02-04-2021"
  },
  {
    "date": "26-03-2019"
  },
  {
    "date": "11-06-2020"
  },
  {
    "date": "03-03-2020"
  },
  {
    "date": "19-05-2021"
  },
  {
    "date": "01-11-2020"
  },
  {
    "date": "06-07-2020"
  },
  {
    "date": "16-01-2019"
  },
  {
    "date": "09-05-2019"
  },
  {
    "date": "12-05-2021"
  },
  {
    "date": "24-07-2019"
  },
  {
    "date": "09-05-2021"
  },
  {
    "date": "29-08-2020"
  },
  {
    "date": "12-09-2021"
  },
  {
    "date": "28-10-2020"
  },
  {
    "date": "29-08-2021"
  },
  {
    "date": "03-01-2019"
  },
  {
    "date": "12-05-2021"
  },
  {
    "date": "13-10-2019"
  },
  {
    "date": "08-02-2021"
  },
  {
    "date": "26-02-2020"
  },
  {
    "date": "25-01-2021"
  },
  {
    "date": "27-08-2021"
  },
  {
    "date": "14-05-2021"
  },
  {
    "date": "13-03-2020"
  },
  {
    "date": "24-11-2019"
  },
  {
    "date": "25-03-2019"
  },
  {
    "date": "13-04-2021"
  },
  {
    "date": "13-02-2020"
  },
  {
    "date": "09-11-2021"
  }
]
#sort by date dd-mm-yyyy
i=8
consultas.sort(key=lambda x: datetime.datetime.strptime(x['date'], '%d-%m-%Y'), reverse=True)
#rewrite index

print(consultas)
#write to json file named consultas.json
with open('consultas.json', 'w') as outfile:
    json.dump(consultas, outfile)
    