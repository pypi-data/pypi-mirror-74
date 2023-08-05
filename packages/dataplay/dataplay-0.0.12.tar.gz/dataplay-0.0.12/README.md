# Data Handling Guidebook
> The one stop shop to learn about data intake, processing, and visualization.


The [Dataplay](https://karpatic.github.io/dataplay/) Handbook uses techniques covered in the [Datalabs](https://karpatic.github.io/datalabs/) Guidebook.

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/) 
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](https://github.com/karpatic/dataplay/blob/master/LICENSE)
[![Active](http://img.shields.io/badge/Status-Active-green.svg)](https://karpatic.github.io) 
[![Python Versions](https://img.shields.io/pypi/pyversions/dataplay.svg)](https://pypi.python.org/pypi/dataplay/)
[![GitHub last commit](https://img.shields.io/github/last-commit/karpatic/dataplay.svg?style=flat)]() 
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/) 

[![GitHub stars](https://img.shields.io/github/stars/karpatic/dataplay.svg?style=social&label=Star)](https://github.com/karpatic/dataplay) 
[![GitHub watchers](https://img.shields.io/github/watchers/karpatic/dataplay.svg?style=social&label=Watch)](https://github.com/karpatic/dataplay) 
[![GitHub forks](https://img.shields.io/github/forks/karpatic/dataplay.svg?style=social&label=Fork)](https://github.com/karpatic/dataplay) 
[![GitHub followers](https://img.shields.io/github/followers/karpatic.svg?style=social&label=Follow)](https://github.com/karpatic/dataplay) 

[![Tweet](https://img.shields.io/twitter/url/https/github.com/karpatic/dataplay.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20%E2%9C%A8%20colab%20by%20@bniajfi%20https://github.com/karpatic/dataplay%20%F0%9F%A4%97) 
[![Twitter Follow](https://img.shields.io/twitter/follow/bniajfi.svg?style=social)](https://twitter.com/bniajfi)

## Install

The code is on <a href="https://pypi.org/project/test-template/">PyPI</a> so you can just run:

```
pip install dataplay geopandas dexplot
```

From the terminal to install the code and its dependencies

## How to use

Import the installed module into your code and use like so:
``` 
from dataplay.acsDownload import retrieve_acs_data 
retrieve_acs_data(state, county, tract, tableId, year, saveAcs)
```
and
```
from dataplay.merge import mergeDatasets
mergeDatasets(left_ds=False, right_ds=False, crosswalk_ds=False,  use_crosswalk = True, left_col=False, right_col=False, crosswalk_left_col = False, crosswalk_right_col = False, merge_how=False, interactive=True)
```

Heres an example:

Define our download parameters.

More information on these parameters can be found in the tutorials!

```
tract = '*'
county = '510'
state = '24'
tableId = 'B19001'
year = '17'
saveAcs = False
```

```
df = retrieve_acs_data(state, county, tract, tableId, year, saveAcs)
df.head()
```

    Number of Columns 17





<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>B19001_001E_Total</th>
      <th>B19001_002E_Total_Less_than_$10_000</th>
      <th>B19001_003E_Total_$10_000_to_$14_999</th>
      <th>...</th>
      <th>state</th>
      <th>county</th>
      <th>tract</th>
    </tr>
    <tr>
      <th>NAME</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Census Tract 1901</th>
      <td>796</td>
      <td>237</td>
      <td>76</td>
      <td>...</td>
      <td>24</td>
      <td>510</td>
      <td>190100</td>
    </tr>
    <tr>
      <th>Census Tract 1902</th>
      <td>695</td>
      <td>63</td>
      <td>87</td>
      <td>...</td>
      <td>24</td>
      <td>510</td>
      <td>190200</td>
    </tr>
    <tr>
      <th>Census Tract 2201</th>
      <td>2208</td>
      <td>137</td>
      <td>229</td>
      <td>...</td>
      <td>24</td>
      <td>510</td>
      <td>220100</td>
    </tr>
    <tr>
      <th>Census Tract 2303</th>
      <td>632</td>
      <td>3</td>
      <td>20</td>
      <td>...</td>
      <td>24</td>
      <td>510</td>
      <td>230300</td>
    </tr>
    <tr>
      <th>Census Tract 2502.07</th>
      <td>836</td>
      <td>102</td>
      <td>28</td>
      <td>...</td>
      <td>24</td>
      <td>510</td>
      <td>250207</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 20 columns</p>
</div>



```
# Primary Table
left_ds = df
left_col = 'tract'

# Crosswalk Table
# Table: Crosswalk Census Communities
# 'TRACT2010', 'GEOID2010', 'CSA2010'
crosswalk_ds = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vREwwa_s8Ix39OYGnnS_wA8flOoEkU7reIV4o3ZhlwYhLXhpNEvnOia_uHUDBvnFptkLLHHlaQNvsQE/pub?output=csv'
use_crosswalk = True
crosswalk_left_col = 'TRACT2010'
crosswalk_right_col = 'GEOID2010'

# Secondary Table
# Table: Baltimore Boundaries
# 'TRACTCE10', 'GEOID10', 'CSA', 'NAME10', 'Tract', 'geometry'
right_ds = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8xXdUaT17jkdK0MWTJpg3GOy6jMWeaXTlguXNjCSb8Vr_FanSZQRaTU-m811fQz4kyMFK5wcahMNY/pub?gid=886223646&single=true&output=csv'
right_col ='GEOID10'

merge_how = 'geometry'
interactive = True
merge_how = 'outer'

banksPd = mergeDatasets( left_ds=left_ds, left_col=left_col, 
              use_crosswalk=use_crosswalk, crosswalk_ds=crosswalk_ds,
              crosswalk_left_col = crosswalk_left_col, crosswalk_right_col = crosswalk_right_col,
              right_ds=right_ds, right_col=right_col, 
              merge_how=merge_how, interactive = interactive )
```

    
     Handling Left Dataset
    retrieveDatasetFromUrl                       B19001_001E_Total  \
    NAME                                      
    Census Tract 1901                   796   
    Census Tract 1902                   695   
    Census Tract 2201                  2208   
    Census Tract 2303                   632   
    Census Tract 2502.07                836   
    ...                                 ...   
    Census Tract 2720.05               1219   
    Census Tract 1202.01                883   
    Census Tract 2720.04               1835   
    Census Tract 2720.06               1679   
    Baltimore City                   239791   
    
                          B19001_002E_Total_Less_than_$10_000  \
    NAME                                                        
    Census Tract 1901                     237                   
    Census Tract 1902                      63                   
    Census Tract 2201                     137                   
    Census Tract 2303                       3                   
    Census Tract 2502.07                  102                   
    ...                                   ...                   
    Census Tract 2720.05                   84                   
    Census Tract 1202.01                   78                   
    Census Tract 2720.04                  155                   
    Census Tract 2720.06                  347                   
    Baltimore City                      29106                   
    
                          B19001_003E_Total_$10_000_to_$14_999  \
    NAME                                                         
    Census Tract 1901                      76                    
    Census Tract 1902                      87                    
    Census Tract 2201                     229                    
    Census Tract 2303                      20                    
    Census Tract 2502.07                   28                    
    ...                                   ...                    
    Census Tract 2720.05                   41                    
    Census Tract 1202.01                   27                    
    Census Tract 2720.04                  109                    
    Census Tract 2720.06                  165                    
    Baltimore City                      15759                    
    
                          ...  \
    NAME                  ...   
    Census Tract 1901     ...   
    Census Tract 1902     ...   
    Census Tract 2201     ...   
    Census Tract 2303     ...   
    Census Tract 2502.07  ...   
    ...                   ...   
    Census Tract 2720.05  ...   
    Census Tract 1202.01  ...   
    Census Tract 2720.04  ...   
    Census Tract 2720.06  ...   
    Baltimore City        ...   
    
                          state  \
    NAME                          
    Census Tract 1901        24   
    Census Tract 1902        24   
    Census Tract 2201        24   
    Census Tract 2303        24   
    Census Tract 2502.07     24   
    ...                     ...   
    Census Tract 2720.05     24   
    Census Tract 1202.01     24   
    Census Tract 2720.04     24   
    Census Tract 2720.06     24   
    Baltimore City           24   
    
                          county  \
    NAME                           
    Census Tract 1901        510   
    Census Tract 1902        510   
    Census Tract 2201        510   
    Census Tract 2303        510   
    Census Tract 2502.07     510   
    ...                      ...   
    Census Tract 2720.05     510   
    Census Tract 1202.01     510   
    Census Tract 2720.04     510   
    Census Tract 2720.06     510   
    Baltimore City           510   
    
                           tract  
    NAME                          
    Census Tract 1901     190100  
    Census Tract 1902     190200  
    Census Tract 2201     220100  
    Census Tract 2303     230300  
    Census Tract 2502.07  250207  
    ...                      ...  
    Census Tract 2720.05  272005  
    Census Tract 1202.01  120201  
    Census Tract 2720.04  272004  
    Census Tract 2720.06  272006  
    Baltimore City         10000  
    
    [201 rows x 20 columns]
    checkDataSetExists True
    checkDataSetExists True
    checkDataSetExists True
    Left Dataset and Columns are Valid
    
     Handling Right Dataset
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8xXdUaT17jkdK0MWTJpg3GOy6jMWeaXTlguXNjCSb8Vr_FanSZQRaTU-m811fQz4kyMFK5wcahMNY/pub?gid=886223646&single=true&output=csv
    checkDataSetExists False
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8xXdUaT17jkdK0MWTJpg3GOy6jMWeaXTlguXNjCSb8Vr_FanSZQRaTU-m811fQz4kyMFK5wcahMNY/pub?gid=886223646&single=true&output=csv
    checkDataSetExists True
    checkDataSetExists True
    checkDataSetExists True
    Right Dataset and Columns are Valid
    
     Checking the merge_how Parameter
    merge_how operator is Valid outer
    checkDataSetExists False
    
     Checking the Crosswalk Parameter
    
     Handling Crosswalk Left Dataset Loading
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vREwwa_s8Ix39OYGnnS_wA8flOoEkU7reIV4o3ZhlwYhLXhpNEvnOia_uHUDBvnFptkLLHHlaQNvsQE/pub?output=csv
    checkDataSetExists False
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vREwwa_s8Ix39OYGnnS_wA8flOoEkU7reIV4o3ZhlwYhLXhpNEvnOia_uHUDBvnFptkLLHHlaQNvsQE/pub?output=csv
    checkDataSetExists True
    checkDataSetExists True
    checkDataSetExists True
    
     Handling Crosswalk Right Dataset Loading
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vREwwa_s8Ix39OYGnnS_wA8flOoEkU7reIV4o3ZhlwYhLXhpNEvnOia_uHUDBvnFptkLLHHlaQNvsQE/pub?output=csv
    checkDataSetExists False
    retrieveDatasetFromUrl https://docs.google.com/spreadsheets/d/e/2PACX-1vREwwa_s8Ix39OYGnnS_wA8flOoEkU7reIV4o3ZhlwYhLXhpNEvnOia_uHUDBvnFptkLLHHlaQNvsQE/pub?output=csv
    checkDataSetExists True
    checkDataSetExists True
    checkDataSetExists True
    
     Assessment Completed
    
     Ensuring Left->Crosswalk compatability
    
     Ensuring Crosswalk->Right compatability
    PERFORMING MERGE LEFT->CROSSWALK
    left_on TRACT2010 right_on GEOID2010 how outer
    PERFORMING MERGE LEFT->RIGHT
    left_col GEOID2010 right_col GEOID10 how outer
    
     Local Column Values Not Matched 
    [0]
    1
    
     Crosswalk Unique Column Values
    [24510151000 24510080700 24510080500 24510150500 24510120100 24510090900
     24510280301 24510130803 24510130700 24510130600 24510100100 24510110100
     24510270501 24510270302 24510270401 24510120700 24510271200 24510110200
     24510271002 24510280404 24510270804 24510260203 24510260101 24510260102
     24510090800 24510090300 24510270801 24510120400 24510090200 24510271001
     24510130200 24510140100 24510270600 24510270701 24510130100 24510270803
     24510280200 24510280302 24510130804 24510271101 24510271102 24510150800
     24510270301 24510170100 24510090500 24510170200 24510090600 24510120300
     24510120500 24510130300 24510120600 24510100200 24510150400 24510261000
     24510280403 24510010400 24510250303 24510260303 24510200701 24510272003
     24510070200 24510280102 24510151200 24510260900 24510200400 24510261100
     24510200500 24510250103 24510260301 24510200600 24510130806 24510270702
     24510180200 24510190100 24510270805 24510200200 24510150702 24510270402
     24510250206 24510150701 24510151100 24510040100 24510270101 24510270200
     24510190200 24510271501 24510210100 24510180300 24510180100 24510150100
     24510200300 24510200100 24510090700 24510190300 24510090400 24510200702
     24510250500 24510280401 24510160801 24510160802 24510270703 24510220100
     24510250301 24510270502 24510030100 24510020200 24510250600 24510240200
     24510150900 24510020300 24510270102 24510250207 24510030200 24510250101
     24510280402 24510080102 24510040200 24510200800 24510270903 24510060200
     24510260800 24510160400 24510280101 24510250401 24510240400 24510250102
     24510250205 24510240300 24510271802 24510060100 24510010300 24510010200
     24510270902 24510010100 24510270901 24510270802 24510260605 24510250402
     24510271801 24510260201 24510260401 24510271300 24510230100 24510080101
     24510060300 24510140200 24510160100 24510160200 24510260404 24510150300
     24510150200 24510160700 24510260202 24510271400 24510130805 24510140300
     24510170300 24510080302 24510100300 24510260501 24510160300 24510130400
     24510160600 24510271600 24510271700 24510151300 24510210200 24510271503
     24510060400 24510250204 24510070400 24510230200 24510240100 24510020100
     24510260604 24510120202 24510272007 24510272005 24510230300 24510260302
     24510080200 24510080301 24510010500 24510070100 24510250203 24510070300
     24510080600 24510271900 24510080400 24510120201 24510272004 24510272006
     24510280500 24510260403 24510150600 24510080800 24510160500 24510090100
     24510260402 24510260700]


    /usr/local/lib/python3.6/dist-packages/pandas/core/ops/array_ops.py:253: FutureWarning: elementwise comparison failed; returning scalar instead, but in the future will perform elementwise comparison
      res_values = method(rvalues)


```
banksPd.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>B19001_001E_Total</th>
      <th>B19001_002E_Total_Less_than_$10_000</th>
      <th>B19001_003E_Total_$10_000_to_$14_999</th>
      <th>...</th>
      <th>CSA</th>
      <th>Tract</th>
      <th>geometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>796</td>
      <td>237</td>
      <td>76</td>
      <td>...</td>
      <td>Southwest Baltimore</td>
      <td>1901.0</td>
      <td>POLYGON ((-76.63...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>695</td>
      <td>63</td>
      <td>87</td>
      <td>...</td>
      <td>Southwest Baltimore</td>
      <td>1902.0</td>
      <td>POLYGON ((-76.63...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2208</td>
      <td>137</td>
      <td>229</td>
      <td>...</td>
      <td>Inner Harbor/Fed...</td>
      <td>2201.0</td>
      <td>MULTIPOLYGON (((...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>632</td>
      <td>3</td>
      <td>20</td>
      <td>...</td>
      <td>South Baltimore</td>
      <td>2303.0</td>
      <td>MULTIPOLYGON (((...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>836</td>
      <td>102</td>
      <td>28</td>
      <td>...</td>
      <td>Cherry Hill</td>
      <td>2502.0</td>
      <td>POLYGON ((-76.62...</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 27 columns</p>
</div>



```
type(banksPd)
```




    pandas.core.frame.DataFrame



```
from dataplay.geoms import readInGeometryData
```

```
readInGeometryData(url=banksPd, porg='g', geom='geometry', lat=False, lng=False, revgeocode=False, save=False, in_crs=4326, out_crs=False)
```

```
readInGeometryData(banksPd)
```

```
panp = workWithGeometryData( 'pandp', foodPantryLocations[ foodPantryLocations.City_1 == 'Baltimore' ], csa_gdf, pntsClr='red', polysClr='white')
```

```
# The attributes are what we will use.
in_crs = 2248 # The CRS we recieve our data 
out_crs = 4326 # The CRS we would like to have our data represented as
geom = 'geometry' # The column where our spatial information lives.

# Convert the geometry column datatype from a string of text into a coordinate datatype
banksPd[geom] = banksPd[geom].apply(lambda x: loads( str(x) ))

# Process the dataframe as a geodataframe with a known CRS and geom column
banksGdf = GeoDataFrame(banksPd, crs=in_crs, geometry=geom)
```

```
banksGdf.plot()
```

## Legal

__Disclaimer__

**Views Expressed**:
All views expressed in this tutorial are the authors own and do not represent the opinions of any entity whatsover with which they have been, are now, or will be affiliated.

**Responsibility, Errors and Ommissions**: 
The author makes no assurance about the reliability of the information. The author makes takes no responsibility for updating the tutorial nor maintaining it porformant status. Under no circumstances shall the Author or its affiliates be liable for any indirect incedental, consequential, or special and or exemplary damages arising out of or in connection with this tutorial. Information is provided 'as is' with distinct plausability of errors and ommitions. Information found within the contents is attached with an **MIT license**. Please refer to the License for more information. 

**Use at Risk**:
Any action you take upon the information on this Tutorial is strictly at your own risk, and the author will not be liable for any losses and damages in connection with the use of this tutorial and subsequent products.

**Fair Use**
this site contains copyrighted material the use of which has not always been specifically authorized by the copyright owner. While no intention is made to unlawfully use copyrighted work, circumstanes may arise in which such material is made available in effort to advance scientific literacy. We believe this constitutes a 'fair use' of any such copyrighted material as provided for in section 107 of the US Copyright Law. In accordance with Titile 17 U.S.C. Section 108, the material on this tutorial is distributed without profit to those who have expressed a prior interest in receiving the included information for research and education purposes. 

for more information go to: http://www.law.cornell.edu/uscode/17/107.shtml. If you wish to use copyrighted material from this site for purposes of your own that go beyond 'fair use', you must obtain permission from the copyright owner.

__License__

Copyright © 2019 BNIA-JFI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

