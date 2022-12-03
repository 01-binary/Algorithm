#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    sort(citations.begin(), citations.end());
    int i=0; // 0 1 3 5 6
    while(citations.back() != i){
        int upcnt =0; 
        int downcnt =0;
        
        for(auto &j : citations){
            if(i<=j) upcnt++;
            else if (i>=j) downcnt++;
        }
        
        if(i>=downcnt && i<=upcnt){
            answer=i;
        }
        i++;
    }
    return answer;
}