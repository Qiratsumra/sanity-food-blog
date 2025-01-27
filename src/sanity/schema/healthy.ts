export default {
    name: 'healthy',
    type: 'document',
    title: 'Healthy',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Food Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
      },
     
      {
        name:'slug',
        type:'slug',
        title:'Slug',
        options: { source: "name", maxLength: 96 },
      }
    ],
  };