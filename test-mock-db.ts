
// Mock browser environment
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

global.window = {} as any;
global.localStorage = localStorageMock as any;


(async () => {
  const { mockDB } = await import('./src/lib/mock-db');

  console.log('--- Testing MockDB ---');

  // 1. Check seeding
  const users = mockDB.getUsers();
  console.log(`Seeded users count: ${users.length}`);

  if (users.length !== 20) {
    console.error('FAIL: Expected 20 users after seeding.');
    process.exit(1);
  }

  // 2. Check Get Current User
  const currentUser = mockDB.getCurrentUser();
  if (!currentUser) {
      console.error('FAIL: No current user set.');
      process.exit(1);
  }
  console.log(`Current User: ${currentUser.name} (${currentUser.location})`);


  // 3. Check Potential Matches
  const matches = mockDB.getPotentialMatches(currentUser.id);
  console.log(`Potential matches found: ${matches.length}`);

  if (matches.length === 0) {
      console.warn('WARNING: No potential matches found. Check logic?');
  }

  // 4. Test Update User
  const newBio = "Updated Bio for testing";
  mockDB.updateUser(currentUser.id, { bio: newBio });
  const updatedUser = mockDB.getUser(currentUser.id);

  if (updatedUser?.bio !== newBio) {
      console.error('FAIL: User update failed.');
      process.exit(1);
  }
  console.log('User update success.');

  // 5. Test Like Profile
  if (matches.length > 0) {
      const targetId = matches[0].id;
      const result = mockDB.likeProfile(currentUser.id, targetId);
      console.log(`Liked user ${matches[0].name}. Match result: ${result.isMatch}`);
      
      const userAfterLike = mockDB.getUser(currentUser.id);
      if (!userAfterLike?.likedProfiles.includes(targetId)) {
           console.error('FAIL: Liked profile not saved.');
           process.exit(1);
      }
  }

  console.log('--- ALL TESTS PASSED ---');
})();

