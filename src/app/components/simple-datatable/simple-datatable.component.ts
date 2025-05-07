import { Component,EventEmitter,Input, OnChanges, Output , SimpleChanges, effect, inject} from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';
// import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent implements OnChanges{
@Input() data: EPerson[] | undefined = []
@Input() myData: Boolean = true
@Output() personClicked = new EventEmitter<EPerson>()

epersonsData : EPerson[] = []

// personService = inject(PersonService)

// constructor() {
//   effect(()=>{
//     if(this.personService.modifiedDataTable()){
//       console.log(this.data)
//       this.epersonsData = this.data
//     }
//     this.personService.modifiedDataTable.set(false)
//   })
// }
  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

// ngOnit(){
//   this.epersonsData = this.data
// }

  ngOnChanges(changes: SimpleChanges){
    if(changes['data'] && this.data){
      this.epersonsData = this.data
    }
    if(changes['myData']){
      console.log("MyData")
    }
   
    
  }

  sortData(sortKey: keyof EPerson): void{
    console.log(sortKey)
   
    // this.epersonsData = this.data
    

    if(this.sortOrder[sortKey]==='asc'){
      this.sortOrder[sortKey] = 'desc'
      this.epersonsData = sortBy(this.data, sortKey).reverse()
    } else {
      this.sortOrder[sortKey]= 'asc'
      this.epersonsData = sortBy(this.data, sortKey)
    }
    

    for(let key in this.sortOrder){
      if(key !== sortKey){
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }
    console.log(this.sortOrder)
  }

  sortSing(sortKey: keyof EPerson): string{
    if(this.sortOrder[sortKey]=== 'asc'){
      return '\u2191'
    }else if (this.sortOrder[sortKey]=== 'desc'){
      return '\u2193'
    }else {
      return ''
    }
  }


  onPersonClicked(person : EPerson){
    console.log('person>>', person)
    this.personClicked.emit(person)
  }

}
