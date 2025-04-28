import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

  users: Person[]= 
      [{
        "givenName": "Timothee",
        "surName": "Gullick",
        "email": "tgullick0@amazon.de",
        "age": 1,
        "address": "Room 737"
      }, {
        "givenName": "Hayes",
        "surName": "Straughan",
        "email": "hstraughan1@scientificamerican.com",
        "age": 2,
        "address": "10th Floor"
      }, {
        "givenName": "Sherye",
        "surName": "MacAleese",
        "email": "smacaleese2@oakley.com",
        "age": 3,
        "address": "PO Box 40770"
      }, {
        "givenName": "Osborne",
        "surName": "Jozefczak",
        "email": "ojozefczak3@dot.gov",
        "age": 4,
        "address": "Suite 53"
      }, {
        "givenName": "Rosamond",
        "surName": "Celle",
        "email": "rcelle4@netvibes.com",
        "age": 5,
        "address": "Apt 606"
      }, {
        "givenName": "Ingelbert",
        "surName": "Presho",
        "email": "ipresho5@stumbleupon.com",
        "age": 6,
        "address": "PO Box 52272"
      }, {
        "givenName": "Alair",
        "surName": "Arkwright",
        "email": "aarkwright6@state.gov",
        "age": 7,
        "address": "Room 499"
      }, {
        "givenName": "Demetri",
        "surName": "Bedle",
        "email": "dbedle7@facebook.com",
        "age": 8,
        "address": "PO Box 68546"
      }, {
        "givenName": "Noby",
        "surName": "Dady",
        "email": "ndady8@ocn.ne.jp",
        "age": 9,
        "address": "3rd Floor"
      }, {
        "givenName": "Siana",
        "surName": "Wieprecht",
        "email": "swieprecht9@ning.com",
        "age": 10,
        "address": "Room 993"
      }, {
        "givenName": "Holly",
        "surName": "Jakobsson",
        "email": "hjakobssona@themeforest.net",
        "age": 11,
        "address": "Room 1567"
      }, {
        "givenName": "Chicky",
        "surName": "Collelton",
        "email": "ccolleltonb@cloudflare.com",
        "age": 12,
        "address": "PO Box 25556"
      }, {
        "givenName": "Georgena",
        "surName": "Palatino",
        "email": "gpalatinoc@tinyurl.com",
        "age": 13,
        "address": "PO Box 8913"
      }, {
        "givenName": "Merla",
        "surName": "Cullen",
        "email": "mcullend@dmoz.org",
        "age": 14,
        "address": "Room 1122"
      }, {
        "givenName": "Friedrick",
        "surName": "Gellan",
        "email": "fgellane@soundcloud.com",
        "age": 15,
        "address": "Apt 299"
      }, {
        "givenName": "Kippie",
        "surName": "Maylam",
        "email": "kmaylamf@smugmug.com",
        "age": 16,
        "address": "Suite 85"
      }, {
        "givenName": "Seumas",
        "surName": "Gauvin",
        "email": "sgauving@smh.com.au",
        "age": 17,
        "address": "8th Floor"
      }, {
        "givenName": "Carolyn",
        "surName": "Dominetti",
        "email": "cdominettih@va.gov",
        "age": 18,
        "address": "Room 18"
      }, {
        "givenName": "Elsa",
        "surName": "Boorne",
        "email": "eboornei@wired.com",
        "age": 19,
        "address": "Suite 9"
      }, {
        "givenName": "Irving",
        "surName": "Andrelli",
        "email": "iandrellij@surveymonkey.com",
        "age": 20,
        "address": "PO Box 3950"
      }]

}
