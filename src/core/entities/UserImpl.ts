class User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoUrl: string | null;

  constructor({
    uid,
    displayName,
    email,
    photoUrl,
  }: {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoUrl: string | null;
  }) {
    this.uid = uid;
    this.displayName = displayName;
    this.email = email;
    this.photoUrl = photoUrl;
  }
}

export { User };
