import { defineField, defineType } from "sanity"

export default defineType({
    name: 'textImageSection',
    title: 'Text Image Section',
    type: 'object',
    fields:[
    defineField(
        {
            name:'text',
            title:'Text',
            type:'text'
        }
    ),
    defineField(
        {
            name:'image',
            title:'Image',
            type:'image',
            options : {hotspot : true},
        }
    ),
    defineField(
        {
        name:'alignment',
        title:'Alignment',
        type:'string',
        options:{
            list:[
                {title:'Left', value:'left'},
                {title:'Right', value:'right'}
            ]
        }
        },
    ),
    ]
});