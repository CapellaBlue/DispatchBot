class User < ApplicationRecord
   validates :name, :address, :phone, :social, presence: true
end
