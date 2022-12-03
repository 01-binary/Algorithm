#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;

    int time =1;
    while(1) {
        int maxElementIndex = max_element(priorities.begin(),priorities.end()) - priorities.begin();
        
        if(maxElementIndex == location) {
            return time;
        }
            if(maxElementIndex < location) {
                location = location - maxElementIndex;
            }
            else {
                location = priorities.size() - maxElementIndex + location;
            }
        
            int cnt = 0;
            while(cnt < maxElementIndex) {
                int temp = priorities[0];
                priorities.push_back(temp);
                priorities.erase(priorities.begin());
                cnt++;
            }
            priorities.erase(priorities.begin());
            location--;

            time++;
    }
    return answer;
}