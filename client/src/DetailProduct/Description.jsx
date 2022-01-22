function Description(props) {
    console.log(props.name);
     if(props.name=="description")
     {
         return (
               <div className="flex  justify-center mt-[20px] h-max bg-[#fff] w-[1100px] rounded-2xl shadow-phuongCustom">
                   <div className="m-4">
                   <span><div><p>Design is no longer a value-add that only some companies choose to afford. In today’s marketplace it’s a valuable strategic contributor for every organization. But getting the most value out of a design practice requires that these same organizations create an intentional operational practice—design operations (DesignOps). This comprehensive report provides an introduction to DesignOps along with practical patterns for using it within your organization.</p><p>Author Dave Malouf takes you through DesignOps concepts, components, methods, and tools and shows you how to put them to work. Operationalize your design practices and demonstrate and amplify the value of design for your company and customers alike.</p><ul><li>Explore frameworks, including the DesignOps Canvas and Projects, Process, People, to help you better understand DesignOps practices and create your own</li><li>Understand the pieces that make up DesignOps, from human resources to delivery management, culture, and more</li><li>Learn the role Agile can play in DesignOps</li><li>Dive into common metrics to help determine the health of your design organization</li><li>Discover how to assess the effectiveness of design operations in meeting goals</li></ul></div></span>
                   </div>
               </div>
             );
     }
     return (
         <div>
             
         </div>
     )
     
     
   }
   export default Description;