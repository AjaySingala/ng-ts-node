// Creating an interface
interface A {
    display(): void;
    // propA: number;
    // propB: number;
}
    
class B implements A {
    // Throws error: Class 'B' incorrectly implements interface 'A'.
    // Property 'propB' is missing in type 'B' but required in type 'A'.
    //propA = 10;
    display() {
      console.log("B");
    }
}
    
class C implements A {
    
    //  Throws error:  Class 'C' incorrectly implements interface 'A'.
    //  Property 'display' is missing in type 'C' but required in type 'A'.
    Display() {
      console.log("C");
    }
}

// const objB = new B();
// //objB.propB = 3;
// objB.display();

// const objC = new C();
// objC.display();
