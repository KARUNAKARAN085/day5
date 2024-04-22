let resumeData= [{
    name: 'KARUNAKARAN R',
    age: 24,
    place: "Sivagangai",
    skills: ["HTML","CSS","Javascript"],
    work: "unemployed",
    language: ["English","Tamil"],
    education: {
        school: "st.anne's matric. Hr, Sec School",
        college: "Kongu engineering college"
    },
    hobbies: ["movies","cricket"] 
}]
for(let i of Object.keys(resumeData)){
    console.log(resumeData[i])
}