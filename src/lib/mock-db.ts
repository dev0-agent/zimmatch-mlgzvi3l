export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: 'male' | 'female';
  location: string;
  bio: string;
  avatarUrl: string;
  isPremium: boolean;
  swipesRemaining: number;
  lastSwipeDate: string; // ISO date string
  matches: string[]; // array of matched user IDs
  likedProfiles: string[]; // array of liked user IDs
  passedProfiles: string[]; // array of passed user IDs
}

export type ProfileUpdate = Partial<Omit<User, 'id' | 'matches' | 'likedProfiles' | 'passedProfiles'>>;

const MOCK_USERS: Omit<User, 'id'>[] = [
  {
    name: 'Tawanda',
    email: 'tawanda@example.com',
    age: 26,
    gender: 'male',
    location: 'Harare',
    bio: 'Software developer who loves sadza and stew.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Rumbidzai',
    email: 'rumbi@example.com',
    age: 24,
    gender: 'female',
    location: 'Bulawayo',
    bio: 'Aspiring artist. Love exploring the Matobos.',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Farai',
    email: 'farai@example.com',
    age: 29,
    gender: 'male',
    location: 'Mutare',
    bio: 'Hiking enthusiast. Eastern Highlands is my playground.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    isPremium: true,
    swipesRemaining: 999,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Chido',
    email: 'chido@example.com',
    age: 22,
    gender: 'female',
    location: 'Gweru',
    bio: 'Student at MSU. Coffee lover.',
    avatarUrl: 'https://images.unsplash.com/photo-1534751516042-428629187356?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Blessing',
    email: 'blessing@example.com',
    age: 31,
    gender: 'male',
    location: 'Kwekwe',
    bio: 'Entrepreneur. Always hustling.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Nyasha',
    email: 'nyasha@example.com',
    age: 27,
    gender: 'female',
    location: 'Masvingo',
    bio: 'History buff. Great Zimbabwe is magical.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Tatenda',
    email: 'tatenda@example.com',
    age: 25,
    gender: 'male',
    location: 'Chitungwiza',
    bio: 'Music producer. Making beats in Chi-town.',
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Tariro',
    email: 'tariro@example.com',
    age: 23,
    gender: 'female',
    location: 'Kadoma',
    bio: 'Nurse. Caring and compassionate.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Kudzai',
    email: 'kudzai@example.com',
    age: 28,
    gender: 'male',
    location: 'Chinhoyi',
    bio: 'Teacher. Love the caves.',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Rutendo',
    email: 'rutendo@example.com',
    age: 26,
    gender: 'female',
    location: 'Marondera',
    bio: 'Farmer. Growing the nation.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Simbarashe',
    email: 'simba@example.com',
    age: 30,
    gender: 'male',
    location: 'Harare',
    bio: 'Accountant. Numbers are my game.',
    avatarUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=60',
    isPremium: true,
    swipesRemaining: 999,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Vimbai',
    email: 'vimbai@example.com',
    age: 24,
    gender: 'female',
    location: 'Bulawayo',
    bio: 'Fashion designer. Creating new trends.',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Munyaradzi',
    email: 'munya@example.com',
    age: 32,
    gender: 'male',
    location: 'Mutare',
    bio: 'Mechanic. Fixing cars and hearts.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Yeukai',
    email: 'yeukai@example.com',
    age: 21,
    gender: 'female',
    location: 'Gweru',
    bio: 'Journalism student. Looking for a scoop.',
    avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Panashe',
    email: 'panashe@example.com',
    age: 27,
    gender: 'male',
    location: 'Kwekwe',
    bio: 'Miner. Gold digging (literally).',
    avatarUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Gamuchirai',
    email: 'gamu@example.com',
    age: 25,
    gender: 'female',
    location: 'Masvingo',
    bio: 'Chef. Cooking up a storm.',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Tanaka',
    email: 'tanaka@example.com',
    age: 29,
    gender: 'male',
    location: 'Chitungwiza',
    bio: 'Graphic designer. Pixel perfect.',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Anesu',
    email: 'anesu@example.com',
    age: 23,
    gender: 'female',
    location: 'Kadoma',
    bio: 'Veterinarian. Animal lover.',
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Tendai',
    email: 'tendai@example.com',
    age: 33,
    gender: 'male',
    location: 'Chinhoyi',
    bio: 'Lawyer. Justice for all.',
    avatarUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&auto=format&fit=crop&q=60',
    isPremium: true,
    swipesRemaining: 999,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
  {
    name: 'Tafadzwa',
    email: 'tafadzwa@example.com',
    age: 26,
    gender: 'female',
    location: 'Marondera',
    bio: 'Marketing manager. Selling ice to eskimos.',
    avatarUrl: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=400&auto=format&fit=crop&q=60',
    isPremium: false,
    swipesRemaining: 5,
    lastSwipeDate: new Date().toISOString(),
    matches: [],
    likedProfiles: [],
    passedProfiles: [],
  },
];

const STORAGE_KEY = 'zimmatch_users';
const CURRENT_USER_KEY = 'zimmatch_current_user_id';

class MockDB {
  private users: User[];

  constructor() {
    this.users = this.loadUsers();
    if (this.users.length === 0) {
      this.seedData();
    }
    // Ensure current user is set (for demo purposes, pick the first one if not set)
    if (typeof window !== 'undefined' && !localStorage.getItem(CURRENT_USER_KEY) && this.users.length > 0) {
        localStorage.setItem(CURRENT_USER_KEY, this.users[0].id);
    }
  }

  private loadUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveUsers() {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.users));
  }

  private seedData() {
    this.users = MOCK_USERS.map((user) => ({
      ...user,
      id: crypto.randomUUID(),
    }));
    this.saveUsers();
    console.log('Database seeded with ' + this.users.length + ' users.');
  }

  public getUsers(): User[] {
      return this.users;
  }

  public getUser(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  
  public getCurrentUser(): User | undefined {
      if (typeof window === 'undefined') return undefined;
      const id = localStorage.getItem(CURRENT_USER_KEY);
      if (!id) return undefined;
      return this.getUser(id);
  }

  public setCurrentUser(id: string) {
      if (typeof window === 'undefined') return;
      if (this.getUser(id)) {
          localStorage.setItem(CURRENT_USER_KEY, id);
      }
  }

  public updateUser(id: string, updates: ProfileUpdate): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return undefined;

    this.users[index] = { ...this.users[index], ...updates };
    this.saveUsers();
    return this.users[index];
  }

  public getPotentialMatches(userId: string): User[] {
    const currentUser = this.getUser(userId);
    if (!currentUser) return [];

    return this.users.filter((user) => {
      // Don't show the user themselves
      if (user.id === userId) return false;
      // Don't show users already liked
      if (currentUser.likedProfiles.includes(user.id)) return false;
      // Don't show users already passed
      if (currentUser.passedProfiles.includes(user.id)) return false;
      // Don't show users already matched
      if (currentUser.matches.includes(user.id)) return false;
      
      // Simple gender matching logic (heterosexual matching for demo simplicity, can be expanded)
      if (currentUser.gender === 'male' && user.gender !== 'female') return false;
      if (currentUser.gender === 'female' && user.gender !== 'male') return false;

      return true;
    });
  }

  public likeProfile(userId: string, targetId: string): { isMatch: boolean } {
      const currentUser = this.getUser(userId);
      const targetUser = this.getUser(targetId);

      if (!currentUser || !targetUser) {
          throw new Error("User not found");
      }

      // Add to liked profiles if not already there
      if (!currentUser.likedProfiles.includes(targetId)) {
          currentUser.likedProfiles.push(targetId);
          this.updateUser(userId, { likedProfiles: currentUser.likedProfiles });
      }

      // Check for match (Mock logic: 50% chance they liked you back, OR if they already liked you in a real DB)
      // For this mock, we'll just randomise it if the other person hasn't interacted yet.
      // If the target user has ALREADY liked the current user, it's a match.
      
      let isMatch = false;

      // Simulating "They liked you" logic:
      const alreadyLikedUs = targetUser.likedProfiles.includes(userId);
      const randomChance = Math.random() > 0.5; // 50% chance of match
      
      if (alreadyLikedUs || randomChance) {
          isMatch = true;
          // Create mutual match
          if (!currentUser.matches.includes(targetId)) {
             currentUser.matches.push(targetId);
             this.updateUser(userId, { matches: currentUser.matches });
          }
          if (!targetUser.matches.includes(userId)) {
              targetUser.matches.push(userId);
              // Also ensure target 'likes' user if it was a random match
              if (!targetUser.likedProfiles.includes(userId)) {
                  targetUser.likedProfiles.push(userId);
              }
              this.updateUser(targetId, { matches: targetUser.matches, likedProfiles: targetUser.likedProfiles });
          }
      }

      return { isMatch };
  }

  public passProfile(userId: string, targetId: string) {
      const currentUser = this.getUser(userId);
      if (!currentUser) return;
      
      if (!currentUser.passedProfiles.includes(targetId)) {
          currentUser.passedProfiles.push(targetId);
          this.updateUser(userId, { passedProfiles: currentUser.passedProfiles });
      }
  }
}

export const mockDB = new MockDB();