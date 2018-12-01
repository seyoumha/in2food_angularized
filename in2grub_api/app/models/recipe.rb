class Recipe < ApplicationRecord

  def self.search(search)
    where("title ILIKE ? or category ILIKE ?", "%#{search}%", "%#{search}%")
  end
end
