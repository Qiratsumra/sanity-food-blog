import { defineConfig } from "sanity";
import { structureTool} from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {schema} from './schema/index'

export const SanityConfig =defineConfig({
    name:'default',
    title:'studio',
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    plugins:[structureTool(),visionTool()],
    basePath:'/studio',
    schema:{
        types:schema
    }
    
})