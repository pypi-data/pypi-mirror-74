# Description
This python tool scrap Battle metrics (steam game server statistics)
it return a dictionnary for a given country if used as a module.
alternatively it can be used in standalone and will scrap all iso country and save the result in a csv
and store in a csv the number of server up, down, off and the number of player for each country

# Usage

```
import battlemetrics_scrapper
from iso3166 import countries

for country in countries: # iterate over each country ISO code
    print(get_latest_gameserverstat_country(country)) # display the scrapped info for each country
```

alternatively you can use it as a standalone program. it will create a folder called scrapResult and store a csv for each country containing the result.
the data are append in the csv if the program is re run.


# scrapped data

the CSV contains line like this: each line is a datapoint. the csv are stored in a folder called "scrapResult"
```
        2019-10-21 19:28:50,AT,76,38,93,66.67,116
        1)  value is the date and time in the local format (where the script is ran)
        2)  is the country code (AT = austria) in iso3166
        3)  value is the number of server up
        4)  is the number of server down / off
        5)  is the number of server dead
        6)  is ratio of online server over the online and off server
        7) is the number of player connected to the country's server
 ```
 
 the function retun a dictionnary and thoeses are the key :
 ```
        countryISO -> the ISO code of the country we scrapped (EX : AT) (string)
        countryname -> the human name of the country (EX : Austria) (string)
        timestamp -> timestamp in YYYY-MM-DD HH:MM:SS format EX : 2015-10-21 19:28:50 (string)
        serverup -> number of server up (EX : 69) (int)
        serverdown -> number of server down (EX : 42) (int)
        serverdead -> number of server dead (EX : 666) (int)
        ratioupdown -> % of server up by the sum of server up and down (EX : 77) (int)
        player -> number of player connected on the country's server (EX : 1337) (int)
```
