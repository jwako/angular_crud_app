class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :detail, :update, :destroy]

  def index
  end

  def list
    @items = Item.all
    render json: @items
  end

  def show
  end

  def detail
    render json: @item
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render json: {location: item_path(@item)}, status: :created
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: {location: item_path(@item)}, status: :ok
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    render json: {location: items_path}, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:name, :price, :description)
    end
end
