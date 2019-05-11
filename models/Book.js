var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	kind: {
		type: 'String',
	},
	id: {
		type: 'String',
		unique: true,
	},
	etag: {
		type: 'String',
	},
	selfLink: {
		type: 'String',
	},
	volumeInfo: {
		title: {
			type: 'String',
		},
		subtitle: {
			type: 'String',
		},
		authors: {
			type: ['String'],
		},
		publisher: {
			type: 'String',
		},
		publishedDate: {
			type: 'Date',
		},
		description: {
			type: 'String',
		},
		industryIdentifiers: {
			type: ['Mixed'],
		},
		readingModes: {
			text: {
				type: 'Boolean',
			},
			image: {
				type: 'Boolean',
			},
		},
		pageCount: {
			type: 'Number',
		},
		printedPageCount: {
			type: 'Number',
		},
		printType: {
			type: 'String',
		},
		categories: {
			type: ['String'],
		},
		averageRating: {
			type: 'Number',
		},
		ratingsCount: {
			type: 'Number',
		},
		maturityRating: {
			type: 'String',
		},
		allowAnonLogging: {
			type: 'Boolean',
		},
		contentVersion: {
			type: 'String',
		},
		panelizationSummary: {
			containsEpubBubbles: {
				type: 'Boolean',
			},
			containsImageBubbles: {
				type: 'Boolean',
			},
		},
		imageLinks: {
			smallThumbnail: {
				type: 'String',
			},
			thumbnail: {
				type: 'String',
			},
		},
		language: {
			type: 'String',
		},
		previewLink: {
			type: 'String',
		},
		infoLink: {
			type: 'String',
		},
		canonicalVolumeLink: {
			type: 'String',
		},
	},
	layerInfo: {
		layers: {
			type: ['Mixed'],
		},
	},
	saleInfo: {
		country: {
			type: 'String',
		},
		saleability: {
			type: 'String',
		},
		isEbook: {
			type: 'Boolean',
		},
	},
	accessInfo: {
		country: {
			type: 'String',
		},
		viewability: {
			type: 'String',
		},
		embeddable: {
			type: 'Boolean',
		},
		publicDomain: {
			type: 'Boolean',
		},
		textToSpeechPermission: {
			type: 'String',
		},
		epub: {
			isAvailable: {
				type: 'Boolean',
			},
		},
		pdf: {
			isAvailable: {
				type: 'Boolean',
			},
		},
		webReaderLink: {
			type: 'String',
		},
		accessViewStatus: {
			type: 'String',
		},
		quoteSharingAllowed: {
			type: 'Boolean',
		},
	},
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model('Book', bookSchema);

// Export the Article model
module.exports = Book;
