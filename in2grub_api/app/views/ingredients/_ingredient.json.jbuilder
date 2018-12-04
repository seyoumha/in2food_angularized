json.extract! ingredient, :id, :name, :amount, :unit, :recipe_id
json.url recipe_ingredient_url(recipe.id,ingredient, format: :json)
