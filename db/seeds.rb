require "faker"

Sample.destroy_all
5.times do |i|
  Sample.create(name: Faker::Name.name)
end

Player.create(name: Tester, username: test, password: test)