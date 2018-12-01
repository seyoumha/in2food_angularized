# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.create!([
  {title: 'Pasta', description: 'Pasta with meat sauce', category: 'Italian', featured_recipe: true},
  {title: 'Chicken', description: 'Baked chicken with veggies', category: 'American' },
  {title: 'Roast', description: 'Roasted meat with rice', category: 'SlowCooker' },
  {title: 'Ketfo', description: 'Beef tartar with spices', category: 'Ethiopian', featured_recipe: true },
  {title: 'Veggie combo', description: 'veggie combo over rice', category: 'vegan' },
  {title: 'Toast', description: 'Grain free toast', category: 'Keto, Paleo', featured_recipe: true}
])

User.create(email: 'name@email.com', nickname: 'nothing', name: 'Test User', password: "testpassword")



