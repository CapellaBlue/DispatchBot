class UsersController < ApplicationController
   def index
      users = User.all
      render json: {status: 200, users: users}
   end

   def show
      user = User.find(params[:id])
      render json: {status: 200, user: user}
   end

   def create
      user = User.new(user_params)

      if user.save
         render json: { status: 201, user: user }
      else
         render json: { status: 422, user: user }
      end
   end

   def update
      user = User.find(params[:id])
      user.update(user_params)
      render json: { status: 200, user: user }
   end

   private

   def user_params
      params.require(:user).permit(:name, :address, :phone, :social)
   end

end
