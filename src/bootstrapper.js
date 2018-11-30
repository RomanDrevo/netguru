import TestStore from './stores/TestStore'

const bootstrapper = () =>{
    const testStore = new TestStore()

    return {
        testStore
    }
}