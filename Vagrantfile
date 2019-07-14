Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.box_check_update = false
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = "2"
  end
  config.vm.provision "shell", inline: <<-SHELL
    apt-get -qqy update
    apt-get -qqy install build-essential
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install v10.16.0
    npm config set user 0
    npm config set unsafe-perm true
    cd /vagrant/web/ && npm install
    cd /vagrant/web/ && npm rebuild node-sass
  SHELL
end
