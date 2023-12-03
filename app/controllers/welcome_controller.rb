class WelcomeController < ApplicationController
  def index
    ActionCable.server.broadcast('welcome_channel', params[:time])
    redirect_to root_path
  end
end
