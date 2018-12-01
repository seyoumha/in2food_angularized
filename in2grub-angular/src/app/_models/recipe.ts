export class Recipe{
  constructor(
    public id: string=null, 
    public title: string='', 
    public description: string='', 
    public category: string='', 
    public featured_recipe: boolean=false
    )
  {
  
  }
}