## The significance of union and intersection types in Typescript

In the era of technological evolution TypeScript is such a crucial programming language that is the super serset of JavaScript that emits the potential error while compilation phase instead of the runtime which tremendously saves a developer's life.

Specifically speaking, union and intersection types are very precise and flexible two types that allow a developer to flexibly and precisely declare type in the TypeScript programs.

They allow us to precisely declare types that is easily maintainable and understandable.

Union type is declared by | sign and intersection type is declared using & sign.

When we combile intersection type with type alias, it becomes more robust and powerful. Let's look at an example:

``
// union type
type FrontendDeveloper = 'juniorDeveloper' | 'fakibajDeveloper';
type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
type Developer = FrontendDeveloper | FullStackDeveloper;
const developer: Developer = 'expertDeveloper';
// type declaration
type User = {
name: string;
email?: string;
gender: 'Male' | 'Female'; // union type
bloodGroup: 'O+' | 'A+' | 'AB+'; // union type
};
// type implementation
const user1: User = {
name: 'Yunus',
gender: 'Male',
bloodGroup: 'O+',
};

// intersection type
type FrontendDeveloper = {
skills: string[];
designation1: 'Frontend Developer';
};
type BackendDeveloper = {
skills: string[];
designation2: 'Backend Developer';
};
type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
// type implementation
const fullStackDeveloper: FullStackDeveloper = {
skills: ['HTML', 'CSS', 'EXPRES', 'SQL'],
designation1: 'Frontend Developer',
designation2: 'Backend Developer',
};

``
