import { makeObservable, observable } from "mobx";

class PetOwnerStore {
  pets = [];
  owners = [];

  constructor() {
    makeObservable(this, {
      pets: observable,
      owners: observable,
      totalOwners: observable,
    });
  }

  createPets(pet = { id: 0, name: "", type: "", breed: "", owner: null }) {
    this.pets.push(pet);
  }
  createOwner(owner = { id: 0, firstName: "", lastName: "" }) {
    this.owners.push(owner);
  }

  updateOwner(ownerId, update) {
    const ownerIndexAtId = this.owners.findIndex(
      (owner) => owner.id === ownerId
    );
    if (ownerIndexAtId > -1 && update) {
      this.owners[ownerIndexAtId] = update;
    }
  }

  updatePet(petId, update) {
    const petIndexAtId = this.pets.findIndex((pet) => pet.id === petId);
    if (petIndexAtId > -1 && update) {
      this.pets[petIndexAtId] = update;
    }
  }

  deletePet(petId) {
    const petIndexAtId = this.pets.findIndex((pet) => pet.id === petId);
    if (petIndexAtId > -1) {
      this.pets.splice(petIndexAtId, 1);
    }
  }

  deleteOwner(ownerId) {
    const ownerIndexAtId = this.owners.findIndex(
      (owner) => owner.id === ownerId
    );
    if (ownerIndexAtId > -1) {
      this.owners.splice(ownerIndexAtId, 1);
    }
  }

  get totalOwners() {
    return this.owners.length;
  }

  get totalPets() {
    return this.pets.length;
  }

  getPetsByOwner(ownerId) {
    return this.pets.filter((pet) => {
      return pet.owner && pet.owner.id === ownerId;
    });
  }

  logStoreDetails() {
    console.log(this.storeDetails);
  }
}

const petOwnerStore = new PetOwnerStore();

petOwnerStore.createPet({
  id: 1,
  name: "Bingo",
  type: "Dog",
  breed: "alsertian",
});
petOwnerStore.createPet({
  id: 2,
  name: "Lloyd",
  type: "Cat",
  breed: "winky",
});
petOwnerStore.createOwner({ id: 1, firstName: "Aleem", lastName: "Isiaka" });

petOwnerStore.logStoreDetails();
