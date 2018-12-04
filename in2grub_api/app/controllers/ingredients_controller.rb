class IngredientsController < ApplicationController
  before_action :set_ingredient, only: [:show, :update, :destroy]

  # GET /ingredients
  # GET /ingredients.json
  def index
    @recipe = Recipe.find(params[:recipe_id])
    @ingredients = @recipe.ingredients
  end

  # GET /ingredients/1
  # GET /ingredients/1.json
  def show
  end

  # POST /ingredients
  # POST /ingredients.json
  def create
    @ingredient = Ingredient.new(ingredient_params)
    @recipe = Recipe.find(params[:recipe_id])
    
    if @ingredient.save
      render :show, status: :created, location: recipe_ingredient_url(@recipe.id,@ingredient)
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ingredients/1
  # PATCH/PUT /ingredients/1.json
  def update
    if @ingredient.update(ingredient_params)
      render :show, status: :ok, location: @ingredient
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ingredients/1
  # DELETE /ingredients/1.json
  def destroy
    @ingredient.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ingredient
      @ingredient = Ingredient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def ingredient_params
      params.require(:ingredient).permit(:name, :amount, :unit, :recipe_id)
    end
end
