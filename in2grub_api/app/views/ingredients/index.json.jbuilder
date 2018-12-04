json.ingredients @ingredients, partial: 'ingredients/ingredient', as: :ingredient, locals: {recipe: @recipe}
#json.array! @ingredients, :id, :name, :amount, :unit