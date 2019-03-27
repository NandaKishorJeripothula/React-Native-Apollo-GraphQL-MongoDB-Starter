/** this file will hold the code that will seed our database with the President data */

/**
In this file, we do the following:
1.Import both the President model as well as the request-promise module
2.Fetch data from the mysafeinfo api to retrieve presidents
3.Map through the data and set it to match our schema.
4.Use forEach function on the returned data and populate the database with this data.
5.Export the seed function

 * for realtime data we can make use of the 
 * https://mysafeinfo.com/api/data?list=presidents&format=json
 * which gives all presidents detials of USA
 */
//NOTE: We can omit this if we have prepared data in the database
const request = require('request-promise');
const President = require('./model');

const uri = `https://mysafeinfo.com/api/data?list=presidents&format=json`;
const seed = () => {
    //this is eqaul to fetch in the javascript
    request(uri)
        .then(res => JSON.parse(res))
        .then((res) => {
            const data = res.map((r) => {
                const obj = {};
                obj.name = r.nm;
                obj.term = r.tm;
                obj.party = r.pp;
                return obj;
            });
            data.forEach(d => {
                //Now we have the data so reconstruct the model object and save them in the database
                const president = new President(d);
                president.save((err, item) => {
                    console.log('Saved: ', item);
                })
            });
        })
        .catch((err) => {
            console.error('Error', err);
        });
};
module.exports = seed;