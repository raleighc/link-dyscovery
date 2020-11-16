const resourcesJSON =
[
    {
      "id": 1,
      "category": "Dyslexia",
      "title": "American Speech-Language-Hearing Association (ASHA)",
      "url": "https://www.asha.org/",
      "description": "This site contains information about different language disabilities and a directory for you to find a professional within your state."
    },
    {
        "id": 2,
        "category": "Dyslexia",
        "title": "Reading Horizons",
        "url": "https://www.readinghorizons.com/dyslexia/dyslexia-interventions/helping-adults-with-dyslexia",
        "description": "This site centers around helping adults with dyslexia is critical to improving opportunities for education, employment, and independent living."
    },
    {
        "id": 3,
        "category": "Dyslexia",
        "title": "The Yale Center for Dyslexia and Creative",
        "url": "https://dyslexia.yale.edu/resources/dyslexic-kids-adults/",
        "description": "This site provides practical tips about accommodations and resources for individuals with dyslexia."
    },
    {
        "id": 4,
        "category": "Dyslexia",
        "title": "International Dyslexia Association",
        "url": "https://dyslexiaida.org/",
        "description": "This organization is for people living with dyslexia. It aims to create a future for all individuals who struggle with dyslexia and other related reading differences so that they may have richer, more robust lives and access to the tools and resources they need."
    },
    {
        "id": 5,
        "category": "ADHD",
        "title": "Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD)",
        "url": "https://chadd.org/",
        "description": "CHADD is a national nonprofit organization that improves the lives of people affected by ADHD through education, advocacy, and support."
    },
    {
        "id": 6,
        "category": "ADHD",
        "title": "Attention Deficit Disorder Association",
        "url": "https://add.org/resources/",
        "description": "Our goal at ADDA is to help adults with ADHD live better lives. To help them do just that, we provide our members with information, resources and support. We also work to build awareness and to provide accurate information on adult ADHD to policy makers, the press and the general public."
    },
    {
        "id": 7,
        "category": "ADHD",
        "title": "ADDitude",
        "url": "https://www.additudemag.com/",
        "description": "A community & web site dedicated to strategies and support for individuals and families living with ADD and related conditions."
    },
    {
        "id": 8,
        "category": "ADHD",
        "title": "ADHD Awareness Month (October)",
        "url": "https://adhdawarenessmonth.org/",
        "description": "The ADHD Awareness Month Website is a resource dedicated to raising awareness for ADHD they display common questions, relatable answers, memes, myths, facts, stories, and videos."
    },
    {
        "id": 9,
        "category": "ADHD",
        "title": "Know Your Rights, Students with ADHD",
        "url": "https://www2.ed.gov/about/offices/list/ocr/docs/dcl-know-rights-201607-504.pdf",
        "description": "Summary of Section 504 of the Rehabilitation Act of 1973 that informs you of your rights in reference to public elementary and secondary school students and your school district’s legal obligations under a Federal civil rights law that prohibits disability discrimination."
    },
    {
        "id": 10,
        "category": "ADHD",
        "title": "ADHD Resource Guide",
        "url": "https://www.healthline.com/health/adhd/resource-guide",
        "description": "This website contains resources for Nonprofits, Online Resources, Advocacy, Support Groups, and more."
    },
    {
        "id": 11,
        "category": "ADHD",
        "title": "A.D.D. Warehouse",
        "url": "https://www.addwarehouse.com/",
        "description": "Description: A.D.D. Warehouse is a resource for Books, Assessment products and Training programs for ADHD and related problems."
    },
    {
        "id": 12,
        "category": "Dyscalculia",
        "title": "Dyscalculia.org",
        "url": "https://www.dyscalculia.org/",
        "description": "Dyscalculia.org provides free public information about this math learning disability, it’s history, terminology, science, research, treatment, causes of innumeracy, best practices for diagnosis, treatment, teaching and learning, relevant laws, rules and protections, school, self and organizational advocacy, and access and accommodations across the academic lifespan."
    },
    {
        "id": 13,
        "category": "Dyscalculia",
        "title": "Dyscalculia Blog",
        "url": "https://dyscalculia-blog.com/",
        "description": "Dyscalculia Blog offers information and resources to empower dyscalculics, parents, teachers, students, therapists, and anyone struggling with numbers."
    },
    {
        "id": 14,
        "category": "Dyscalculia",
        "title": "Math Geek Mama",
        "url": "https://mathgeekmama.com/math-resources/dyscalculia-resources/",
        "description": "This is a community site for a mother that has built a network for helping teach children with Dyscalculia."
    },
    {
        "id": 15,
        "category": ["ADHD", "Dyslexia", "Processing Deficits"],
        "title": "LD Online",
        "url": "http://www.ldonline.org/",
        "description": "This site provides up-to-date information on learning disabilities and ADHD for adolescents, adults, parents, and professionals."
    },
    {
        "id": 16,
        "category": ["ADHD", "Dyslexia", "Processing Deficits", "Dysgraphia", "Dyscalculia"],
        "title": "Learning Disabilities Association of America",
        "url": "https://ldaamerica.org/adults/?audience=Adults",
        "description": "This site provides resources for success for all individuals affected by learning disabilities through support, education, and advocacy."
    },
    {
        "id": 17,
        "category": ["ADHD", "Dyslexia", "Processing Deficits", "Dysgraphia", "Dyscalculia"],
        "title": "Protecting Students with Disabilities",
        "url": "https://www2.ed.gov/about/offices/list/ocr/504faq.html",
        "description": "Frequently asked questions about Section 504 of the Rehabilitation Act of 1973, and the Education of Children with Disabilities."
    },
    {
        "id": 18,
        "category": ["ADHD", "Dyslexia", "Processing Deficits", "Dysgraphia", "Dyscalculia"],
        "title": "Learn How To Become",
        "url": "https://www.learnhowtobecome.org/career-resource-center/resources-for-college-students-with-disabilities/",
        "description": "This site contains a guide created to bring awareness to rights and responsibilities of students with disabilities, help them learn how to take advantage of myriad services, and provide expert advice from a postsecondary education administrator who has spent years serving college students with disabilities."
    },
    {
        "id": 19,
        "category": "Dysgraphia",
        "title": "Adult Dysgraphia Testing",
        "url": "https://ediagnosticlearning.com/adult-dysgraphia/",
        "description": "This site can help someone who struggles with writing and muscle control to learn more about dysgraphia and find a route to talking to a professional for diagnosis and learning assistance."
    },
    {
        "id": 19,
        "category": "Dysgraphia",
        "title": "Dysgraphia Support Groups",
        "url": "http://lifey.org/dysgraphia/#support-groups",
        "description": "This site contains a list of current support groups for people living with Dysgraphia."
    },
    {
        "id": 19,
        "category": "Processing Deficits",
        "title": "National Coalition of Auditory Processing Disorders",
        "url": "https://www.ncapd.org/Home_Page.html",
        "description": "National Coalition of Auditory Processing Disorders is a site where people can learn more about APD and treatment processes."
    },
    {
        "id": 19,
        "category": "Processing Deficits",
        "title": "Visual Processing Resources",
        "url": "http://www.ldonline.org/article/Visual_Processing_Disorders%3A_In_Detail",
        "description": "This site categorizes a range of different visual processing disorders for people to better understand the experiences they are having difficulty with so they can seek more specific help."
    }
  ]
  export default resourcesJSON;