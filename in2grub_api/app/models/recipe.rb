class Recipe < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  def self.search(search)
    where("title ILIKE ? or category ILIKE ?", "%#{search}%", "%#{search}%")
  end
end
