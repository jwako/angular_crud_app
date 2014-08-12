class Item < ActiveRecord::Base

	validates :name, :description, :price, presence: true
	validates_length_of :name, :maximum => 100
  validates_length_of :description, :maximum => 255
  validates :price, :numericality => { :only_integer => true, :allow_blank => true }

end
