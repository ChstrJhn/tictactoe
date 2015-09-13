class CreateGameStats < ActiveRecord::Migration
  def change
  	create_table :game_stats do |t|
  		t.integer :game_id
  		t.integer :player_1
  		t.integer :player_2
  		t.string :moves
  		t.timestamps null:false
  	end
  end
end
