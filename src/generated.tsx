import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  GraphQLDateTime: any,
  GraphQLTime: any,
};

export type Activity = {
   __typename?: 'Activity',
  id: Scalars['ID'],
  type: ActivityType,
  name: Scalars['String'],
  appointments: Array<Appointment>,
  exclusive: Scalars['Boolean'],
  during: DuringType,
  parent?: Maybe<Activity>,
};

export type ActivityInput = {
  type: ActivityType,
  name: Scalars['String'],
  exclusive: Scalars['Boolean'],
  during: DuringType,
  parent: Scalars['ID'],
};

export enum ActivityType {
  University = 'University',
  Faculty = 'Faculty',
  Course = 'Course',
  Groups = 'Groups'
}

export type Appointment = {
   __typename?: 'Appointment',
  id: Scalars['ID'],
  type: AppointmentType,
  on?: Maybe<Weekday>,
  from: Scalars['GraphQLDateTime'],
  to: Scalars['GraphQLDateTime'],
  activity: Activity,
};

export type AppointmentInput = {
  type: AppointmentType,
  on?: Maybe<Weekday>,
  from: Scalars['GraphQLDateTime'],
  to: Scalars['GraphQLDateTime'],
  activity: Scalars['ID'],
};

export enum AppointmentType {
  Lecture = 'Lecture',
  Exercise = 'Exercise',
  Training = 'Training'
}

export enum DuringType {
  WinterSemester = 'WinterSemester',
  SummerSemester = 'SummerSemester',
  Always = 'Always'
}



export type LoginInput = {
  username: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  addAppointment: Appointment,
  addActivity: Activity,
  login: User,
};


export type MutationAddAppointmentArgs = {
  input: AppointmentInput
};


export type MutationAddActivityArgs = {
  input: ActivityInput
};


export type MutationLoginArgs = {
  input: LoginInput
};

export type Query = {
   __typename?: 'Query',
  activities: Array<Activity>,
  user: User,
};


export type QueryActivitiesArgs = {
  parentId: Scalars['ID']
};


export type QueryUserArgs = {
  userId: Scalars['ID']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  activities: Array<Activity>,
  appointments: Array<Appointment>,
};


export type UserActivitiesArgs = {
  type?: Maybe<ActivityType>
};


export type UserAppointmentsArgs = {
  from?: Maybe<Scalars['GraphQLDateTime']>,
  to?: Maybe<Scalars['GraphQLDateTime']>
};

export enum Weekday {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export type GetActivitiesQueryVariables = {
  userId: Scalars['ID']
};


export type GetActivitiesQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { activities: Array<(
      { __typename?: 'Activity' }
      & Pick<Activity, 'id' | 'type' | 'name' | 'exclusive' | 'during'>
    )> }
  ) }
);


export const GetActivitiesDocument = gql`
    query getActivities($userId: ID!) {
  user(userId: $userId) {
    id
    activities {
      id
      type
      name
      exclusive
      during
    }
  }
}
    `;
export type GetActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetActivitiesQuery, GetActivitiesQueryVariables> & TChildProps;
export function withGetActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetActivitiesQuery,
  GetActivitiesQueryVariables,
  GetActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetActivitiesQuery, GetActivitiesQueryVariables, GetActivitiesProps<TChildProps>>(GetActivitiesDocument, {
      alias: 'getActivities',
      ...operationOptions
    });
};

/**
 * __useGetActivitiesQuery__
 *
 * To run a query within a React component, call `useGetActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivitiesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, baseOptions);
      }
export function useGetActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetActivitiesQuery, GetActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetActivitiesQuery, GetActivitiesQueryVariables>(GetActivitiesDocument, baseOptions);
        }
export type GetActivitiesQueryHookResult = ReturnType<typeof useGetActivitiesQuery>;
export type GetActivitiesLazyQueryHookResult = ReturnType<typeof useGetActivitiesLazyQuery>;
export type GetActivitiesQueryResult = ApolloReactCommon.QueryResult<GetActivitiesQuery, GetActivitiesQueryVariables>;