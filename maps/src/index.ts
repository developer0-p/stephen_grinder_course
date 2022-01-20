/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// console.log(user)

const user = new User();
const company = new Company()
const customMap = new CustomMap('map');
// console.log(company)




customMap.addMarker(user)
customMap.addMarker(company)
