# MyReads Project

This is a simple application using React to manage and keepp track of you readiings. It allows to manage the books you already read, the ones you are currently reading and the ones you wish to read in the future using three graphical bookshelfs. You can easily move books from one shelf to another or search and add more books thanks to the integration of a search engine withing the app.

## Install and Run the App

You have two options to install and run:
* Install and Run Dev version using npm/yarn
* Install and Run pre-build package using your favourite web-server

### Install with npm/yarn

From your command line run
```bashscript
git clone https://github.com/aberaza/reactMyReadings.git
cd reactMyReadings
npm install
``` 
This will download the sources to the folder ```reactMyReadings/``` and then _cd_ into it to finish installing dependencies using npm. If you prefer *yarn* to manage dependencies change that last command and use ```yarn install``` instead.

Once this is finished to launch the app you can run:
```bashscript
npm run
#or
yarn run
```

This will start a server and launch your default browser pointing to URL ```localhost:3000```. In case no browser is opened. You can start one and write that URL in the browsers address box.

## Install pre-build package.

Simply download [myReads.zip](myReads.zip) file to your computer and unzip it's contents into a folder.

To launch the app serve it with a web-server and point your browser to the correct URL where the app is accesible. Or if you have no webserver installed run:
```bashscript
# Install serve if not already installed on your computer
npm install -g serve

# Launch the server
serve <path>/<to>/<myReads_folder>
``` 
_serve_ will display information on where is the app accessible. You can copy and paste it to your browser or Ctrl-Click on it.
