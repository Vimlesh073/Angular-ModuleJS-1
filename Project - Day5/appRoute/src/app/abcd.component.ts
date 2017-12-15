

import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';
import {ProductService} from './productservice'


@Component({
  selector:'abcd',
  template:`<h1>ABCD  are ::</h1>
  <p>Route Paramters are ::</p>
`
})
export class ABComponent {

    message:string;

   
}
