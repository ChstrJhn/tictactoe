class CreateGames < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.integer :user_id
  		t.integer :player_1
  		t.integer :player_2
  		t.integer :winner_id
  		t.timestamps null:false
  	end
  end
end
