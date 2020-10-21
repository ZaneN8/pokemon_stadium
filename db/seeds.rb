require "faker"
require 'poke-api-v2'

Sample.destroy_all
5.times do |i|
  Sample.create(name: Faker::Name.name)
end

PokeApi.get(pokemon: 'bulbasaur')