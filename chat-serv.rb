# Simple Sinatra app to test/demo js-chat.
%w(
  rubygems
  sinatra
  haml
).each { |dependency| require dependency }

# Basic example Message class.
class Message
  attr_accessor :name, :body

  def initialize(attrs = {})
    @name = attrs['name'] || attrs[:name]
    @body = attrs['body'] || attrs[:body]
  end

  class << self
    def all
      @@messages ||= []
    end
  end
end

get '/' do
  headers 'Content-Type' => 'text/html; charset=utf-8'
  @messages = Message.all
  haml :home
end

post '/messages' do
  Message.all << Message.new(params['message'])
  redirect '/'
end

use_in_file_templates!

__END__
@@ layout
%html
  %head
    %title js-chat / chat-serv

  %body
    = yield

@@ home
%h1
  js-chat / chat-serv
%div
  - @messages.each do |message|
    %h3= message.name
    %p= message.body
